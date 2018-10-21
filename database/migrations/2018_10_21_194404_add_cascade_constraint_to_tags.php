<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCascadeConstraintToTags extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tag_course', function (Blueprint $table) {
            // user_id
            $table->dropForeign('tag_course_user_id_foreign');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // course_id
            $table->dropForeign('tag_course_course_id_foreign');
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('skill_course', function (Blueprint $table) {
            // user_id
            $table->dropForeign('tag_course_user_id_foreign');
            $table->foreign('user_id')->references('id')->on('users');

            // course_id
            $table->dropForeign('tag_course_course_id_foreign');
            $table->foreign('course_id')->references('id')->on('courses');
        });
    }
}
