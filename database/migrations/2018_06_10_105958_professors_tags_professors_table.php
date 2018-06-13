<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ProfessorsTagsProfessorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_professor', function (Blueprint $table) {
            $table->unsignedInteger('professor_id');
            $table->unsignedInteger('tag_id');
            $table->unsignedInteger('user_id');
            $table->timestamps();

            $table->foreign('professor_id')->references('id')->on('professors');
            $table->foreign('tag_id')->references('id')->on('professors_tags');
            $table->foreign('user_id')->references('id')->on('users');

            $table->primary(['professor_id', 'tag_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tag_professor');
    }
}
