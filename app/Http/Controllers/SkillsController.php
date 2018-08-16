<?php

namespace App\Http\Controllers;

use App\Skill;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    /**
     * Quick search skills for reviews and filters
     *
     * @param Request $request
     * @return mixed
     */
    public function quickSearch(Request $request) {
        $query = $request->input('q');

        $skills = Skill::search($query)->limit(7)->get(['id', 'name', 'relevance']);


        return $skills;
    }
}
