<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTagsCoursesTable extends Migration
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
            $table->unsignedInteger('course_review_id');
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');;
            $table->foreign('tag_id')->references('id')->on('courses_tags')->onDelete('cascade');;
            $table->foreign('course_review_id')->references('id')->on('courses_reviews')->onDelete('cascade');;

            $table->primary(['course_id', 'tag_id', 'course_review_id'], 'course_tag_review');
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
