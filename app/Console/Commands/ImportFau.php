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
     * Semesters that are used for import of professors and courses
     */
    private $semesters;

    /**
     * Create a new command instance.
     * @var Client $client
     * @return void
     */
    public function __construct(Client $client)
    {
        parent::__construct();

        $this->client = new Client(['headers' => ['Content-Type' => 'application/xml']]);
        $this->semesters = ["2016w", "2017s", "2017w", "2018s", "2018w"];
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
            case "map-courses-to-professors":
                $this->mapCoursesToProfessors();
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

                $list = $xml->xpath("//Org[not(contains(substring-after(@key, 'Org.'), '.'))]");
                foreach ($list as $org) {
                    try {
                        $faculty = new Faculty;
                        $faculty->name = $org->name;
                        $faculty->type = "faculty";
                        $faculty->university_id = 1;
                        $faculty->univis_id = $org->id;
                        $faculty->univis_orgnr = $org->attributes()['orgnr'];
                        $faculty->univis_key = $org->attributes()['key'];
                        $faculty->univis_hash = hash('sha256', $org->asXML());
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

        echo "Faculties import finished" . "\n";
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

                    $list = $xml->xpath("//Org[not(contains(substring-after(@key, '" . $faculty->univis_key . ".'), '.')) and (contains(@key, '" . $faculty->univis_key . ".'))]");
                    foreach ($list as $org) {
                        try {
                            $department = new Department;
                            $department->name = $org->name;
                            $department->type = "department";
                            $department->faculty_id = $faculty->id;
                            $department->univis_id = $org->id;
                            $department->univis_orgnr = $org->attributes()['orgnr'];
                            $department->univis_key = $org->attributes()['key'];
                            $department->univis_hash = hash('sha256', $org->asXML());
                            $department->location = $org->ort;
                            $department->save();

                            echo $org->attributes()['key'] . " has been imported \n";

                        } catch (\Exception $e) {
                            echo($e->getMessage(). "\n");
                        }
                    }
                } catch (Exception $e) {
                    echo($e->getMessage()."\n");
                }
            }
        }

        echo "Departments import finished" . "\n";
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
                            $chair->univis_hash = hash('sha256', $org->asXML());
                            $chair->location = $org->ort;
                            $chair->save();


                            echo $department->univis_key . ": " . $key . " has been imported \n";
                        }

                    } catch (\Exception $e) {
                        echo ($e->getMessage() . "\n");
                    }
                }
            } catch (Exception $e) {
                echo ($e->getMessage() . "\n");
            }
        }

        echo "Chairs import finished" . "\n";
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
                        $course->short_name = $lecture->short;
                        $course->chair_id = $chair->id;
                        $course->course_type = $lecture->type;
                        $course->univis_id = $lecture->id;
                        $course->univis_key = $lecture->attributes()['key'];
                        $course->univis_hash = hash('sha256', $lecture->asXML());
                        $course->ects = $lecture->ects_cred;
                        $course->sws = $lecture->sws;
                        $course->max_turnout = $lecture->maxturnout;
                        $course->language = $lecture->leclanguage;
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

        echo "Courses import finished" . "\n";
    }

    /**
     * @return void
     */
    private function importProfessors()
    {
        $chairs = Chair::all();
        foreach ($this->semesters as $semester) {
            foreach ($chairs as $chair) {
                try {
                    $res = $this->client->get($this->endPoint, [
                        'query' => [
                            'search' => 'persons',
                            'department' => $chair->univis_id,
                            'show' => 'xml',
                            'sem' => $semester
                        ],
                    ]);

                    $xml = simplexml_load_string($res->getBody()->getContents());
                    $list = $xml->xpath("//Person");
                    foreach ($list as $person) {
                        try {
                            // check if record already exists
                            $oldProfessor = Professor::where('univis_id', $person->id)->first();

                            if (is_null($oldProfessor)) {
                                $professor = new Professor;
                                $professor->name = $person->firstname . " " . $person->lastname;
                                $professor->title = $person->title;
                                $professor->gender = ($person->gender == "f") ? 0 : 1;
                                $professor->univis_id = $person->id;
                                $professor->univis_key = $person->attributes()['key'];
                                $professor->univis_hash = hash('sha256', $person->asXML());
                                $professor->chair_id = $chair->id;

                                $professor->save();

                                echo $person->attributes()['key'] . " imported \n";
                            } else {
                                // calculating new hash value
                                $newHash = hash('sha256', $person->asXML());

                                // if there are updates, save them
                                if ($newHash != $oldProfessor->univis_hash) {
                                    $oldProfessor->name = $person->firstname . " " . $person->lastname;
                                    $oldProfessor->title = $person->title;
                                    $oldProfessor->gender = ($person->gender == "f") ? 0 : 1;
                                    $oldProfessor->univis_id = $person->id;
                                    $oldProfessor->univis_key = $person->attributes()['key'];
                                    $oldProfessor->univis_hash = hash('sha256', $person->asXML());
                                    $oldProfessor->chair_id = $chair->id;

                                    $oldProfessor->save();

                                    echo $person->attributes()['key'] . " updated \n";
                                }
                            }


                        } catch (\Exception $e) {
                            echo($e->getMessage() . "\n");
                        }
    }

                } catch (\Exception $e) {
                    echo($e->getMessage() . "\n");
                }
        }
        }

        echo "import Professors finished" . "\n";
    }

    /**
     * @return void
     */
    private function mapCoursesToProfessors()
    {
        $courses = Course::all();
        foreach ($courses as $course) {
            try {
                $res = $this->client->get($this->endPoint, [
                    'query' => [
                        'search' => 'lectures',
                        'id' => $course->univis_id,
                        'show' => 'xml'
                    ],
                ]);

                $xml = simplexml_load_string($res->getBody()->getContents());
                $list = $xml->xpath("//Lecture/dozs/doz");
                foreach ($list as $lecture) {
                    try {
                        $univisKey = $lecture->UnivISRef->attributes()['key'];
                        $professor = Professor::where("univis_key", $univisKey)->first();

                        $course->professors()->attach($professor->id);

                        echo "$course->univis_key was mapped to $professor->univis_key \n";
                    } catch (\Exception $e) {
                        echo($e->getMessage() . "\n");
                    }
                }

            } catch (\Exception $e) {
                echo($e->getMessage() . "\n");
            }
        }

        echo "Mapping courses to professors task is finished." . "\n";
    }
}
