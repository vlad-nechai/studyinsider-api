<?php

use Illuminate\Database\Seeder;
use App\University;

class UniversitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $university = new University;
        $university->name = "Hogwarts School of Witchcraft and Wizardry";
        $university->location = "Hogwarts";
        $university->type = "university";
        $university->save();
    }
}
