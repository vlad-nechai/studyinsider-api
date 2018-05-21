<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('type');
            $table->string('univis_id')->nullable()->unique();
            $table->string('univis_orgnr')->nullable()->unique();
            $table->string('univis_hash')->nullable()->unique();
            $table->string('univis_key')->nullable()->unique();
            $table->string('location')->nullable();
            $table->unsignedInteger('faculty_id');
            $table->timestamps();

            $table->foreign('faculty_id')->references('id')->on('faculties');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departments');
    }
}
