<?php

namespace App\Console\Commands;

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

                foreach(range('M','T') as $v) {
                    try {
                        $res = $this->client->get($this->endPoint, [
                            'query' => [
                                'search' => 'departments',
//                                'id' => '49626763',
//                                'path' => 'recht',
                                'name' => "^$v",
                                'show' => 'xml'
                            ],
                        ]);

                        $xml = simplexml_load_string($res->getBody()->getContents());

                        $list = $xml->xpath("//Org[not(contains(substring-after(@key, 'Org.'), '.'))]");
                        foreach ($list as $org) {
                            $faculty = new Faculty;
                            $faculty->name = $org->name;
                            $faculty->type = "Faculty";
                            $faculty->university_id = 2;
                            $faculty->univis_id = $org->id;
                            $faculty->univis_orgnr = $org->attributes()['orgnr'];
                            $faculty->univis_hash = hash('sha256', $org);
                            $faculty->location = $org->ort;
                            $faculty->save();

                            echo $org->name . " has been imported";
                        }
                    } catch (Exception $e) {
                        echo ($e->getMessage());
                    }

                }

                echo "Faculties import finished";
                break;
            default:
                echo "input either 'faculties'";
        }
    }
}
