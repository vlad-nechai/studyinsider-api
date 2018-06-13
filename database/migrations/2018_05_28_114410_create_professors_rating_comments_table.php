<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfessorsRatingCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professors_rating_comments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger("professor_id");
            $table->unsignedInteger("user_id");
            $table->text("user_comment");
            $table->timestamps();

            $table->foreign("professor_id")->references("id")->on("professors");
            $table->foreign("user_id")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professors_rating_comments');
    }
}
