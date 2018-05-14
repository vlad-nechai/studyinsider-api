<?php

namespace App\Console\Commands;

use App\Course;
use Illuminate\Console\Command;

class ImportCourses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:courses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $course = new Course;
        $course->name = "Command course";
        $course->chair_id = 1;
        $course->type = "Lecture";
        $course->univis_id = 38378738;
        $course->location = "Erlangen";
        $course->save();
    }
}
