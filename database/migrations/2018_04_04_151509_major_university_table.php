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
        Schema::create('major_university_table', function (Blueprint $table) {
            $table->unsignedInteger('uni_id');
            $table->unsignedInteger('major_id');

            $table->foreign('uni_id')->references('id')->on('universities');
            $table->foreign('major_id')->references('id')->on('majors');

            $table->primary(['uni_id', 'major_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('major_university_table');
    }
}
