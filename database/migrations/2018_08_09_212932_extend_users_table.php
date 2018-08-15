<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ExtendUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function($table)
        {
            $table->integer('sex')->after('last_name');
            $table->string("email")->after('name')->unique()->change();
            $table->string("birth_place", 50)->after('email')->nullable();
            $table->string("location", 50)->after('birth_place')->nullable();
            $table->string("study_program", 50)->after('location');
            $table->string("image", 100)->after('study_program')->default('assets/images/girl2.jpg');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //no reason to drop it cause it is going to be dropped in other migration
    }
}
