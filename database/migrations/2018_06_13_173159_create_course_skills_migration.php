<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseSkillsMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skill_course', function (Blueprint $table) {
            $table->unsignedInteger('course_id');
            $table->unsignedInteger('skill_id');
            $table->unsignedInteger('user_id');
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('skill_id')->references('id')->on('skills');
            $table->foreign('user_id')->references('id')->on('users');

            $table->primary(['course_id', 'skill_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('skill_course');
    }
}
