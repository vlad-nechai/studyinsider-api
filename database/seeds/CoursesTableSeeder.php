<?php

use Illuminate\Database\Seeder;
use App\Course;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $course = new Course;
        $course->name = 'Transfiguration';
        $course->chair_id = 1;
        $course->type = 'compulsory';
        $course->location = 'Room 12';
        $course->save();

        $course = new Course;
        $course->name = 'Defence Against the Dark Arts';
        $course->chair_id = 5;
        $course->type = 'compulsory';
        $course->location = 'Room 13';
        $course->save();

        $course = new Course;
        $course->name = 'Charms';
        $course->chair_id = 4;
        $course->type = 'compulsory';
        $course->location = 'Room 14';
        $course->save();

        $course = new Course;
        $course->name = 'Potions';
        $course->chair_id = 6;
        $course->type = 'compulsory';
        $course->location = 'Room 15';
        $course->save();

        $course = new Course;
        $course->name = 'Astronomy';
        $course->chair_id = 4;
        $course->type = 'elective';
        $course->location = 'Room 16';
        $course->save();

        $course = new Course;
        $course->name = 'History of Magic';
        $course->chair_id = 4;
        $course->type = 'elective';
        $course->location = 'Room 17';
        $course->save();

        $course = new Course;
        $course->name = 'Herbology';
        $course->chair_id = 3;
        $course->type = 'compulsory';
        $course->location = 'Room 18';
        $course->save();

        $course = new Course;
        $course->name = 'Arithmancy';
        $course->chair_id = 2;
        $course->type = 'elective';
        $course->location = 'Room 19';
        $course->save();

        $course = new Course;
        $course->name = 'Muggle Studies';
        $course->chair_id = 2;
        $course->type = 'elective';
        $course->location = 'Room 20';
        $course->save();

        $course = new Course;
        $course->name = 'Divination';
        $course->chair_id = 2;
        $course->type = 'elective';
        $course->location = 'Room 21';
        $course->save();

        $course = new Course;
        $course->name = 'Study of Ancient Runes';
        $course->chair_id = 5;
        $course->type = 'elective';
        $course->location = 'Room 22';
        $course->save();

        $course = new Course;
        $course->name = 'Care of Magical Creatures';
        $course->chair_id = 3;
        $course->type = 'elective';
        $course->location = 'Room 23';
        $course->save();
    }
}
