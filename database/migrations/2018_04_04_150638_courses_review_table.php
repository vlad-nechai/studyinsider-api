<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CoursesReviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses_reviews', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('user_id');
            $table->unsignedInteger('course_id');
            $table->unsignedInteger('semester_id');

            $table->integer('star_rating');
            $table->double('user_course_grade')->nullable();
            $table->integer('recommend')->nullable()->comment = "Would zou recommend on scale from 0 to 5";
            $table->integer('difficulty')->nullable()->comment = "How difficult on scale from 0 to 5";
            $table->tinyInteger('attendance_recommended')->nullable();
            $table->text('comment')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('semester_id')->references('id')->on('semesters');

            $table->unique(['user_id', 'course_id', 'semester_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses_reviews');
    }
}
