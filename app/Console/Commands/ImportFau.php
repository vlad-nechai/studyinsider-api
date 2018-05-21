<?php

namespace App\Console\Commands;

use App\Chair;
use App\Course;
use App\Department;
use App\Faculty;
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

                foreach ($list as $org) {
                    try {
                        $course = new Course;
                        $course->name = $org->name;
                        $course->course_type = $org->type;
                        $course->chair_id = $chair->id;
                        $course->univis_id = $org->id;
//                    $course->univis_ref = $org->classification->UnivISRef->attributes()['key'];
                        $course->univis_key = $org->attributes()['key'];
                        $course->sws = $org->sws;
                        $course->ects = $org->ects_cred;
//                    $course->semester = $org->sws;
//                    $course->program_type = $org->sws;
                        $course->language = $org->leclanguage;
//                    $course->mandatory = $org->sws;
                        $course->summary = $org->summary;

                        $course->save();

                        echo $org->attributes()['key'] . "\n";

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
}
