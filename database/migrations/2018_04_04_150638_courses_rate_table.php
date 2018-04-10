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
            $table->string('user_major')->nullable();
            $table->double('user_gpa')->nullable();
            $table->double('user_course_grade')->nullable();
            $table->integer('interesting')->nullable();
            $table->integer('difficulty')->nullable();
            $table->integer('usefulness')->nullable();
            $table->boolean('attendance_required')->nullable();
            $table->integer('often_study')->nullable();
            $table->boolean('take_again')->nullable();
            $table->boolean('pay_attention_in_class')->nullable();
            $table->integer('script')->nullable();
            $table->integer('clearness')->nullable();
            $table->integer('completeness')->nullable();
            $table->integer('relevance')->nullable();
            $table->integer('tutorium')->nullable();
            $table->integer('effort')->nullable();
            $table->integer('bullshitmeter')->nullable();
            $table->text('comments')->nullable();
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
