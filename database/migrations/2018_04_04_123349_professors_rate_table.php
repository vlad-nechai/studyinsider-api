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
            $table->integer('approachability')->nullable();
            $table->boolean('invite')->nullable();
            $table->integer('competence')->nullable();
            $table->integer('quality')->nullable();
            $table->integer('difficulty')->nullable();
            $table->integer('content')->nullable();
            $table->boolean('recommend')->nullable();
            $table->boolean('take_again')->nullable();
            $table->text('comment')->nullable();
            $table->double('grade_received')->nullable();
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
