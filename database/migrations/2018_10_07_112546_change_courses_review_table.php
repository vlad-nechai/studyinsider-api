<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeCoursesReviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('courses_rate', function (Blueprint $table) {
            $table->dropColumn('user_gpa');
            $table->renameColumn('user_major', 'when_course_taken');
            $table->renameColumn('take_again', 'recommend_to_friends');
            $table->renameColumn('attend_seminars', 'attendance_required');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('courses_rate', function (Blueprint $table) {
            $table->double('user_gpa');
            $table->renameColumn('when_course_taken', 'user_major');
            $table->renameColumn('recommend_to_friends', 'take_again');
            $table->renameColumn('attendance_required', 'attend_seminars');
        });
    }
}
