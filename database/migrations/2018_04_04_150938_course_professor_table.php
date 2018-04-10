<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CourseProfessorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_professor_table', function (Blueprint $table) {
            $table->unsignedInteger('prof_id');
            $table->unsignedInteger('course_id');

            $table->foreign('prof_id')->references('id')->on('professors');
            $table->foreign('course_id')->references('id')->on('courses');

            $table->primary(['prof_id', 'course_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_professor_table');
    }
}
