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
            $table->unsignedInteger('university_id');
            $table->integer('reputation')->nullable();
            $table->integer('wifi')->nullable();
            $table->integer('facilities')->nullable();
            $table->integer('size')->nullable();
            $table->integer('installations')->nullable();
            $table->integer('chill')->nullable();
            $table->integer('library')->nullable();
            $table->integer('opportunities')->nullable();
            $table->integer('mensa')->nullable();
            $table->integer('location')->nullable();
            $table->integer('social_life')->nullable();
            $table->integer('safety')->nullable();
            $table->integer('courses_variety')->nullable();
            $table->integer('fun')->nullable();
            $table->integer('organizations')->nullable();
            $table->integer('company_affiliations')->nullable();
            $table->integer('student_body')->nullable();
            $table->integer('affiliations')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('university_id')->references('id')->on('universities');

            $table->primary(['university_id', 'user_id']);
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
