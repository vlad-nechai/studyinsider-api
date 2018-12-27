<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class SkillsController extends Controller
{
    /**
     * Quick search skills for reviews and filters
     *
     * @param Request $request
     * @return Response
     */
    public function quickSearch(Request $request) {
        $query = $request->input('q');

        $skills = Skill::search($query)->limit(7)->get(['id', 'name', 'relevance']);

        return response()->json($skills, ResponseCode::HTTP_OK);
    }
}
