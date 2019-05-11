<?php

use App\Models\University;
use Illuminate\Database\Seeder;

class UniversitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $university = new University;
//        $university->name = "Hogwarts School of Witchcraft and Wizardry";
//        $university->location = "Hogwarts";
//        $university->type = "university";
//        $university->save();

        $university = new University;
        $university->name = "Friedrich-Alexander-Universität Erlangen-Nürnberg";
        $university->location = "Schloßplatz 4, 91054 Erlangen";
        $university->type = "university";
        $university->save();
    }
}
