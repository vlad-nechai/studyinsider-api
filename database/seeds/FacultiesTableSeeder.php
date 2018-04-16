<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
            'university_id' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('faculties')->insert([
            'id' => 2,
            'name' => 'WISO',
            'type' => 'Institute',
            'location' => 'Nuremberg',
            'university_id' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
