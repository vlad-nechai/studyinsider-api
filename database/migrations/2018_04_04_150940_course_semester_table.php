<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CourseSemesterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_semester', function (Blueprint $table) {
            $table->unsignedInteger('course_id');
            $table->unsignedInteger('semester_id');

            $table->string('ects')->nullable();
            $table->integer('sws')->nullable()->comment = "Semester Wochen Stunden";
            $table->string('language')->nullable();
            $table->string('max_turnout')->nullable();
            $table->string('summary')->nullable();

            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('semester_id')->references('id')->on('semesters');

            $table->primary(['course_id', 'semester_id'], 'course_semester');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_semester');
    }
}
