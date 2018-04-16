<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
            'type' => 'university',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('universities')->insert([
            'id' => 2,
            'name' => 'Technische Hochschule Ohm',
            'location' => 'Nuremberg',
            'type' => 'Fachhochschule',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
