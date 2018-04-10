<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UniversitiesRateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('universities_rate', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('uni_id');
            $table->integer('reputation');
            $table->integer('wifi');
            $table->integer('facilities');
            $table->integer('size');
            $table->integer('installations');
            $table->integer('chill');
            $table->integer('library');
            $table->integer('opportunities');
            $table->integer('mensa');
            $table->integer('location');
            $table->integer('social_life');
            $table->integer('safety');
            $table->integer('courses_variety');
            $table->integer('fun');
            $table->integer('organizations');
            $table->integer('company_affiliations');
            $table->integer('student_body');
            $table->integer('affiliations');
            $table->text('comments');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('uni_id')->references('id')->on('universities');

            $table->primary(['uni_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('universities_rate');
    }
}
