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
//            $table->string('user_major')->nullable();
//            $table->double('user_gpa')->nullable();
//            $table->integer('interesting')->nullable()->comment = "How interesting on scale from 1 to 10";
//            $table->integer('usefulness')->nullable()->comment = "How useful on scale from 1 to 10";
//            $table->boolean('must_attend')->nullable()->comment = "Is it required to attend the class";
//            $table->integer('often_study')->nullable()->comment = "How did you have to study on scale from 1 to 10";
//            $table->boolean('take_again')->nullable()->comment = "Would you take it again";
//            $table->boolean('pay_attention_in_class')->nullable()->comment = "Did you have to pay attention in the class";
//            $table->integer('script')->nullable()->comment = "How good the script is on scale from 1 to 10";
//            $table->integer('clearness')->nullable()->comment = "How clear the script on scale from 1 to 10";
//            $table->integer('completeness')->nullable()->comment = "How complete the script on scale from 1 to 10";
//            $table->integer('bullshitmeter')->nullable()->comment = "On scale from 1 to 10";

            //exam related fields
//            $table->integer('relevance')->nullable()->comment = "How relevant the script was in regard to the exam on scale from 1 to 10";
//            $table->boolean('attend_seminars')->nullable()->comment = "Did you have to go to tutorial to pass exam";
//            $table->boolean('memorize_script')->nullable()->comment = "Did you have to memorize script to pass exam";
//            $table->boolean('do_extra_work')->nullable()->comment = "Did you have to do extra work to pass exam";
//            $table->boolean('study_old_exams')->nullable()->comment = "Did you have to study old exams to pass exam";
//            $table->boolean('take_notes')->nullable()->comment = "Did you have to take notes to pass exam";
//            $table->boolean('come_to_class')->nullable()->comment = "Did you have simply to come to class to pass exam";
//            $table->integer('effort')->nullable()->comment = "How much effort did you have to put to pass the course on scale from 1 to 10";

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('semester_id')->references('id')->on('semesters');

//            $table->primary(['user_id', 'course_id']);
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
