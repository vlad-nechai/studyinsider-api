<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CourseProfessorSemesterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_professor_semester', function (Blueprint $table) {
            $table->unsignedInteger('professor_id');
            $table->unsignedInteger('course_id');
            $table->unsignedInteger('semester_id');

            $table->foreign('professor_id')->references('id')->on('professors');
            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('semester_id')->references('id')->on('semesters');

            $table->primary(['professor_id', 'course_id', 'semester_id'], 'professor_course_semester');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_professor_semester');
    }
}
