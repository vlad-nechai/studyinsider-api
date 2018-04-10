<?php

use Illuminate\Database\Seeder;

class FacultiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('faculties')->insert([
            'id' => 1,
            'name' => 'Techfak',
            'type' => 'faculty',
            'location' => 'Erlangen',
            'uni_id' => 1
        ]);

        DB::table('faculties')->insert([
            'id' => 2,
            'name' => 'WISO',
            'type' => 'Institute',
            'location' => 'Nuremberg',
            'uni_id' => 1
        ]);
    }
}
