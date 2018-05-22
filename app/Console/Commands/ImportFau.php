<?php

namespace App\Console\Commands;

use App\Chair;
use App\Course;
use App\Department;
use App\Faculty;
use App\Professor;
use Illuminate\Console\Command;
use GuzzleHttp\Client;
use GuzzleHttp\Exception;

class ImportFau extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:fau {type}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for importing FAU faculties, departments, chairs, courses and professors';

    /**
     * The GuzzleHttp client.
     *
     * @var Client
     */
    protected $client;

    /**
     * Create a new command instance.
     * @var Client $client
     * @return void
     */
    public function __construct(Client $client)
    {
        parent::__construct();

        $this->client = new Client(['headers' => ['Content-Type' => 'application/xml']]);
    }

    /**
     * Endpoint for API calls
     * @var string
     */
    private $endPoint = 'http://univis.uni-erlangen.de/prg';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        switch ($this->argument('type')) {
            case "faculties":
                $this->importFaculties();
                break;
            case "departments":
                $this->importDepartments();
                break;
            case "chairs":
                $this->importChairs();
                break;
            case "courses":
                $this->importCourses();
                break;
            case "professors":
                $this->importProfessors();
                break;
            default:
                echo "Something went wrong! Please try again";
        }
    }

    /**
     * @return void
     */
    private function importFaculties() {
        foreach(range('A','Z') as $v) {
            try {
                $res = $this->client->get($this->endPoint, [
                    'query' => [
                        'search' => 'departments',
                        'name' => "^$v",
                        'show' => 'xml'
                    ],
                ]);

                $xml = simplexml_load_string($res->getBody()->getContents());

                //TODO: fix hash attribute
                $list = $xml->xpath("//Org[not(contains(substring-after(@key, 'Org.'), '.'))]");
                foreach ($list as $org) {
                    try {
                        $faculty = new Faculty;
                        $faculty->name = $org->name;
                        $faculty->type = "Faculty";
                        $faculty->university_id = 1;
                        $faculty->univis_id = $org->id;
                        $faculty->univis_orgnr = $org->attributes()['orgnr'];
                        $faculty->univis_key = $org->attributes()['key'];
                        $faculty->location = $org->ort;
                        $faculty->save();

                        echo $org->attributes()['key'] . " has been imported \n";

                    } catch (\Exception $e) {
                        echo ($e->getMessage()."\n");
                    }
                }
            } catch (Exception $e) {
                echo ($e->getMessage()."\n");
            }
        }

        echo "Faculties import finished";
    }

    /**
     * @return void
     */
    private function importDepartments()
    {
        $faculties = Faculty::all();
        foreach ($faculties as $faculty) {
            foreach (range('A', 'Z') as $v) {
                try {
                    $res = $this->client->get($this->endPoint, [
                        'query' => [
                            'search' => 'departments',
                            'name' => "^$v",
                            'show' => 'xml'
                        ],
                    ]);

                    $xml = simplexml_load_string($res->getBody()->getContents());

                    //TODO: fix hash attribute
                    $list = $xml->xpath("//Org[not(contains(substring-after(@key, '" . $faculty->univis_key . ".'), '.')) and (contains(@key, '" . $faculty->univis_key . ".'))]");
                    foreach ($list as $org) {
                        try {
                            $department = new Department;
                            $department->name = $org->name;
                            $department->type = "Department";
                            $department->faculty_id = $faculty->id;
                            $department->univis_id = $org->id;
                            $department->univis_orgnr = $org->attributes()['orgnr'];
                            $department->univis_key = $org->attributes()['key'];
//                            $department->univis_hash = hash('sha256', $org->id);
                            $department->location = $org->ort;
                            $department->save();

                            echo $org->attributes()['key'] . " has been imported \n";

                        } catch (\Exception $e) {
                            echo($e->getMessage());
                        }
                    }
                } catch (Exception $e) {
                    echo($e->getMessage());
                }
            }
        }

        echo "Departments import finished";
    }

    /**
     * @return void
     */
    private function importChairs()
    {
        foreach(range('A','Z') as $v) {
            try {
                $res = $this->client->get($this->endPoint, [
                    'query' => [
                        'search' => 'departments',
                        'name' => "^$v",
                        'show' => 'xml'
                    ],
                ]);

                $xml = simplexml_load_string($res->getBody()->getContents());

                //TODO: fix hash attribute
                $list = $xml->xpath("//Org");
                foreach ($list as $org) {
                    try {
                        $key = $org->attributes()['key'];
                        if (substr_count($key, '.') == 3) {
                            $departmentKey = substr($key, 0, strpos($key, '.', strpos($key, '.', strpos($key, '.')+1)+1));
                            $department = Department::where('univis_key', $departmentKey)->first();

                            $chair = new Chair;
                            $chair->name = $org->name;
                            $chair->department_id = $department->id;
                            $chair->univis_id = $org->id;
                            $chair->univis_orgnr = $org->attributes()['orgnr'];
                            $chair->univis_key = $org->attributes()['key'];
                            $chair->location = $org->ort;
                            $chair->save();


                            echo $department->univis_key . ": " . $key . " has been imported \n";
                        }

                    } catch (\Exception $e) {
                        echo ($e->getMessage());
                    }
                }
            } catch (Exception $e) {
                echo ($e->getMessage(). "\n");
            }
        }

        echo "Chairs import finished";
    }

    /**
     * @return void
     */
    private function importCourses()
    {
        $chairs = Chair::all();
        foreach ($chairs as $chair) {
            try {
                $res = $this->client->get($this->endPoint, [
                    'query' => [
                        'search' => 'lectures',
                        'department' => $chair->univis_id,
                        'show' => 'xml'
                    ],
                ]);

                $xml = simplexml_load_string($res->getBody()->getContents());
                $list = $xml->xpath("//Lecture ");

                foreach ($list as $lecture) {
                    try {
                        $course = new Course;
                        $course->name = $lecture->name;
                        $course->course_type = $lecture->type;
                        $course->chair_id = $chair->id;
                        $course->univis_id = $lecture->id;
//                    $course->univis_ref = $lecture->classification->UnivISRef->attributes()['key'];
                        $course->univis_key = $lecture->attributes()['key'];
                        $course->sws = $lecture->sws;
                        $course->ects = $lecture->ects_cred;
//                    $course->semester = $lecture->sws;
//                    $course->program_type = $lecture->sws;
                        $course->language = $lecture->leclanguage;
//                    $course->mandatory = $lecture->sws;
                        $course->summary = $lecture->summary;

                        $course->save();

                        echo $lecture->attributes()['key'] . "\n";

                    } catch (\Exception $e) {
                        echo($e->getMessage() . "\n");
                    }
                }
            } catch (\Exception $e) {
                echo($e->getMessage() . "\n");
            }
        }

        echo "Courses import finished";
    }

    /**
     * @return void
     */
    private function importProfessors()
    {
        $chairs = Chair::all();
        foreach ($chairs as $chair) {
            try {
                $res = $this->client->get($this->endPoint, [
                    'query' => [
                        'search' => 'persons',
                        'department' => $chair->univis_id,
                        'show' => 'xml'
                    ],
                ]);

                $xml = simplexml_load_string($res->getBody()->getContents());
                $list = $xml->xpath("//Person");
                foreach ($list as $person) {
                    try {
                        $professor = new Professor;
                        $professor->name = $person->firstname . " " . $person->lastname;
                        $professor->level = $person->atitle;
                        $professor->type = $person->title;
                        $professor->univis_id = $person->id;
                        $professor->univis_key = $person->attributes()['key'];
                        $professor->chair_id = $chair->id;

                        $professor->save();

                        echo $person->attributes()['key'] . "\n";

                    } catch (\Exception $e) {
                        echo($e->getMessage() . "\n");
                    }
}

            } catch (\Exception $e) {
                echo($e->getMessage() . "\n");
            }
        }

        echo "import Professors finished";
    }
}
