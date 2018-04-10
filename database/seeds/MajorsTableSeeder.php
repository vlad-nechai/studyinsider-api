<?php

use Illuminate\Database\Seeder;

class MajorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('majors')->insert([
            'id' => 1,
            'name' => 'IIS',
            'type' => 'master'
        ]);

        DB::table('majors')->insert([
            'id' => 2,
            'name' => 'MIBS',
            'type' => 'master'
        ]);
    }
}
