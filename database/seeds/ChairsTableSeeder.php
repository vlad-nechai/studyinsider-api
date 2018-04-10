<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChairsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chairs')->insert([
            'id' => 1,
            'name' => 'INF',
            'location' => 'K-119'
        ]);

        DB::table('chairs')->insert([
            'id' => 2,
            'name' => 'SOSY',
            'location' => 'K2'
        ]);
    }
}
