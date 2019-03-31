<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Professor;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;


class ProfessorController extends Controller
{
    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:admin'])->only(['store', 'update', 'destroy']);
    }

    /**
     * @OA\Get(
     *     path="/professors/",
     *     tags={"Professors"},
     *     summary="List all professors",
     *     description="Returns paginated professor collection",
     *     operationId="listProfessors",
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
     * @return Response
     */
    public function index()
    {
        $professors = Professor::with(['chair', 'courses'])->has('courses')->paginate(10);

        return response()->json($professors, ResponseCode::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'gender' => 'required|between:0,1',
            'chair_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $professor = Professor::create($input);

        return response()->json($professor, ResponseCode::HTTP_CREATED);
    }

    /**
     * @OA\Get(
     *     path="/professors/{professorId}",
     *     tags={"Professors"},
     *     summary="Find professor by ID",
     *     description="Returns a single professor object",
     *     operationId="getProfessorById",
     *     @OA\Parameter(
     *         name="professorId",
     *         in="path",
     *         description="ID of professor to return",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Professor"),
     *         @OA\XmlContent(ref="#/components/schemas/Professor"),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplier"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Professor not found"
     *     )
     * )
     *
     * @param  Professor  $professor
     * @return Professor $professor
     */
    public function show(Professor $professor)
    {
        return $professor->load(['chair', 'courses']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $professor = Professor::find($id);
        $professor->update($input);

        return response()->json($professor, ResponseCode::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $professor = Professor::find($id);
        $professor->delete();

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }

    /**
     * @OA\Get(
     *     path="/professors/quick-search",
     *     tags={"Quick search"},
     *     summary="Quick search for professors. To be used for autocomplete",
     *     description="Returns paginated professor collection.",
     *     operationId="quickSearchProfessors",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="query param to search professors",
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

        $professors = Professor::search($query, null, true, true)->limit(7)->get(['id', 'name', 'relevance']);

        return response()->json($professors, ResponseCode::HTTP_OK);
    }
}
