<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ProfessorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('professors')->insert([
            'id' => 1,
            'name' => 'Obi One',
            'level' => '4',
            'type' => 'prof',
            'chair_id' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('professors')->insert([
            'id' => 2,
            'name' => 'Frodo Beggins',
            'level' => '1',
            'type' => 'assistant prof',
            'chair_id' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('professors')->insert([
            'id' => 3,
            'name' => 'Jackie Chan',
            'level' => '3',
            'type' => 'prof',
            'chair_id' => 2,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
