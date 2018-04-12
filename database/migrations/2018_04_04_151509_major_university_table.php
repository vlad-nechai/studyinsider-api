<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MajorUniversityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('major_university', function (Blueprint $table) {
            $table->unsignedInteger('university_id');
            $table->unsignedInteger('major_id');

            $table->foreign('university_id')->references('id')->on('universities');
            $table->foreign('major_id')->references('id')->on('majors');

            $table->primary(['university_id', 'major_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('major_university');
    }
}
