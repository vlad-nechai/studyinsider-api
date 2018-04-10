<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CoursesRateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses_rate', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('course_id');
            $table->string('user_major');
            $table->double('user_gpa');
            $table->double('user_course_grade');
            $table->integer('interesting');
            $table->integer('difficulty');
            $table->integer('usefulness');
            $table->boolean('attendance_required');
            $table->integer('often_study');
            $table->boolean('take_again');
            $table->boolean('pay_attention_in_class');
            $table->integer('script');
            $table->integer('clearness');
            $table->integer('completeness');
            $table->integer('relevance');
            $table->integer('tutorium');
            $table->integer('effort');
            $table->integer('bullshitmeter');
            $table->text('comments');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('course_id')->references('id')->on('courses');

            $table->primary(['user_id', 'course_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses_rate');
    }
}
