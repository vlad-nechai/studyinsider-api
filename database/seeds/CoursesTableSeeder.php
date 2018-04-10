<?php

use Illuminate\Database\Seeder;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            'id' => 1,
            'name' => 'AUD',
            'chair_id' => 1,
            'type' => 'obligatory',
            'location' => 'K11',
        ]);

        DB::table('courses')->insert([
            'id' => 2,
            'name' => 'KonzMod',
            'chair_id' => 2,
            'type' => 'elective',
            'location' => 'W11',
        ]);
    }
}
