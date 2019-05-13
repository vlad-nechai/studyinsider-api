<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique()->comment = "Course name in univis";
            $table->string('short_name')->nullable()->comment = "Short course name in univis";
            $table->string('univis_id')->nullable()->comment = "univis id dor course";
            $table->string('univis_key')->nullable()->comment = "univis key dor course";
            $table->unsignedInteger('chair_id')->index();
            $table->string('course_type')->index()->comment = "Lecture, seminar or tutorial";
            $table->timestamps();

            $table->foreign('chair_id')->references('id')->on('chairs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
