<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFacultiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faculties', function (Blueprint $table) {
            $table->unsignedInteger('id');
            $table->string('name');
            $table->string('type');
            $table->string('location');
            $table->unsignedInteger('uni_id');
            $table->timestamps();

            $table->foreign('uni_id')->references('id')->on('universities');

            $table->primary(['id', 'uni_id']);
        });

        //TODO: set uni_id not Nullable
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('faculties');
    }
}
