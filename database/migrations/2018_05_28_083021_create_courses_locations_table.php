<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses_locations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("course_id");
//            TODO: add room_id after modelling room entities
//            $table->unsignedInteger("room_id");
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses');
//            $table->foreign('room_id')->references('id')->on('rooms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses_locations');
    }
}
