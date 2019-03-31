<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class SkillsController extends Controller
{
    /**
     * @OA\Get(
     *     path="/skills/quick-search",
     *     tags={"Quick search"},
     *     summary="Quick search for skills. To be used for autocomplete",
     *     description="Returns paginated skills collection.",
     *     operationId="quickSearchSkills",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="query param to search skills",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Server error"
     *     )
     * )
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
