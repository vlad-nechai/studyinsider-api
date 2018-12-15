<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesScheduleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses_schedule', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger("course_id");
            $table->unsignedInteger("semester_id");

            $table->string("start_time");
            $table->string("end_time");
            $table->string("room");
            $table->string("repeat");
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('semester_id')->references('id')->on('semesters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses_schedule');
    }
}
