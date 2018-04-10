<?php

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
        DB::table('universities')->insert([
            'id' => 1,
            'name' => 'FAU',
            'location' => 'Erlangen-Nuremberg',
            'type' => 'university'
        ]);

        DB::table('universities')->insert([
            'id' => 2,
            'name' => 'Technische Hochschule Ohm',
            'location' => 'Nuremberg',
            'type' => 'Fachhochschule'
        ]);
    }
}
