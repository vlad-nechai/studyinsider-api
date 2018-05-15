<?php

namespace App\Http\Controllers\Univis;

use App\Course;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class FauController extends Controller
{
    private $endPoint = 'http://univis.uni-erlangen.de/prg';

    public function index() {

//        foreach(range('A','C') as $v){
//            $url = "http://univis.uni-erlangen.de/prg?search=lectures&department=49652439&name=^$v&show=xml";
//
//            $curl = curl_init();
//            curl_setopt($curl, CURLOPT_URL, $url);
//            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//
//            $result = curl_exec($curl);
//
//            curl_close($curl);
//
//            $xml = simplexml_load_string($result);
////            $xml = new \DOMDocument();
////            $xml->load($result);
//
////            foreach($xml->attributes() as $a => $b) {
////                echo $a,'="',$b,"\"\n";
////            }
//
////            dd($xml->Lecture);
//            foreach ($xml->Lecture as $lecture) {
//                try {
//                    $course = new Course;
//                    $course->name = $lecture->name;
//                    $course->chair_id = 1;
//                    $course->type = $lecture->type;
//                    $course->univis_id = $lecture->id;
//                    $course->location = $lecture->id;
//
//                    $course->save();
//                } catch (\Exception $exception) {
//                    echo $exception->getMessage();
//                }
//            }
//
//        }
        $client = new Client(['headers' => ['Content-Type' => 'application/xml']]);

        foreach(range('M','T') as $v) {
            try {
                $res = $client->get($this->endPoint, [
                    'query' => [
                        'search' => 'departments',
//                        'id' => '49626763',
//                      'path' => 'recht',
                        'name' => "^$v",
                        'show' => 'xml'
                    ],
                ]);

                $xml = simplexml_load_string($res->getBody()->getContents());

                $list = $xml->xpath("//Org[not(contains(substring-after(@key, 'Org.'), '.'))]");
                foreach ($list as $org) {
                    echo $org->name . " " .$org->attributes()['key']. " " . "<br>";
                }

//                foreach ($xml->Org as $org) {
//                    foreach($org->attributes() as $a => $b) {
//                        echo $a,'="',$b,"\"\n";
//                    }
//                    echo '<br>';
//                }


            } catch (GuzzleException $e) {
            }

        }
    }

    public function importFaculties() {

    }

    public function importDepartments() {

    }

    public function importChairs() {

    }

    public function courses() {

    }

    public function professors() {

    }

    public function chairs() {

    }
}
