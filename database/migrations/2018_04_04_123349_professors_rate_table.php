<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ProfessorsRateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professors_rate', function (Blueprint $table) {
            $table->unsignedInteger('prof_id');
            $table->unsignedInteger('user_id');
            $table->integer('star_rating');
            $table->string('user_major')->nullable();
            $table->double('user_gpa')->nullable();
            $table->double('grade_received')->nullable();
            $table->integer('approachability')->nullable()->comment = "How easy to approach professor on scale from 1 to 10";
            $table->boolean('invite')->nullable()->comment = "Would you invite the professor to a beer";
            $table->integer('competence')->nullable()->comment = "How competent is the professor on scale from 1 to 10";
            $table->integer('difficulty')->nullable();
            $table->integer('content')->nullable()->comment = "How good was the content on scale from 1 to 10";
            $table->integer('script_quality')->nullable()->comment = "How good was the script on scale from 1 to 10";
            $table->integer('exam_difficulty')->nullable()->comment = "How difficult was the exam on scale from 1 to 10";
            $table->boolean('recommend')->nullable()->comment = "Would you recommend courses from this professor";
            $table->boolean('take_again')->nullable()->comment = "Would you take the courses from the professor again";
            $table->timestamps();

            $table->foreign('prof_id')->references('id')->on('professors');
            $table->foreign('user_id')->references('id')->on('users');

            $table->primary(['prof_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professors_rate');
    }
}
