<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfessorsLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professors_locations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("professor_id");
//          TODO: add room_id after modelling room entities
//          $table->unsignedInteger("room_id");
            $table->timestamps();

            $table->foreign('professor_id')->references('id')->on('professors');
//          $table->foreign('room_id')->references('id')->on('rooms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professors_locations');
    }
}
