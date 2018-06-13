<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CoursesTagsCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_course', function (Blueprint $table) {
            $table->unsignedInteger('course_id');
            $table->unsignedInteger('tag_id');
            $table->unsignedInteger('user_id');
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('tag_id')->references('id')->on('courses_tags');
            $table->foreign('user_id')->references('id')->on('users');

            $table->primary(['course_id', 'tag_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tag_course');
    }
}
