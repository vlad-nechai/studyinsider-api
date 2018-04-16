<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
            'type' => 'master',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('majors')->insert([
            'id' => 2,
            'name' => 'MIBS',
            'type' => 'master',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
