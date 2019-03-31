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
            $table->integer('sex');
            $table->string("email")->after('name')->unique()->change();
            $table->string("birth_date", 50)->after('email')->nullable();
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
        Schema::table('users', function($table) {
            $table->dropColumn('sex');
            $table->dropColumn('birth_date');
            $table->dropColumn('location');
            $table->dropColumn('study_program');
            $table->dropColumn('image');
        });
    }
}
