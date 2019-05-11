<?php

use App\Models\Semester;
use Illuminate\Database\Seeder;

class SemesterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $semesters = ["2016w", "2017s", "2017w", "2018s", "2018w", "2019s"];
        foreach ($semesters as $semester) {
            $semesterModel = new Semester();
            $semesterModel->name = $semester;
            $semesterModel->save();
        }
    }
}
