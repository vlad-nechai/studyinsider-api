<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseSkillsTable extends Migration
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
            $table->unsignedInteger('course_review_id');
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('skill_id')->references('id')->on('skills')->onDelete('cascade');
            $table->foreign('course_review_id')->references('id')->on('courses_reviews')->onDelete('cascade');

            $table->primary(['course_id', 'skill_id', 'course_review_id'], 'course_skill_review');
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
