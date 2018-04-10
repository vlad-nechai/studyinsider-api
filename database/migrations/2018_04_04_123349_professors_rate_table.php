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
            $table->integer('approachability');
            $table->boolean('invite');
            $table->integer('competence');
            $table->integer('quality');
            $table->integer('difficulty');
            $table->integer('content');
            $table->boolean('recommend');
            $table->boolean('take_again');
            $table->text('comment');
            $table->double('grade_received');
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
