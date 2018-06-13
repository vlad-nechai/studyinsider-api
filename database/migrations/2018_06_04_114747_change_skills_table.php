<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('skills', function($table)
        {
            $table->string("language")->after('name')->default("en");
            $table->string("origin")->after('language')->default("linkedin");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('skills', function($table)
        {
            $table->dropColumn("language");
            $table->dropColumn("origin");
        });
    }
}
