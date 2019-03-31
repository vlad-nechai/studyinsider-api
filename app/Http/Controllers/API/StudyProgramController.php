<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\StudyProgram;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class StudyProgramController extends Controller
{

    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:admin'])->only(['store', 'update', 'destroy']);
    }

    /**
     * @OA\Get(
     *     path="/study-programs/",
     *     tags={"Study Programs"},
     *     summary="List all Study programs",
     *     description="Returns paginated study program collection",
     *     operationId="listStudyPrograms",
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
        $studyPrograms = StudyProgram::paginate(10);

        return response()->json($studyPrograms, ResponseCode::HTTP_OK);
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
            'university_id' => 'required',
            'type' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $studyProgram = StudyProgram::create($input);

        return response()->json($studyProgram, ResponseCode::HTTP_CREATED);
    }

    /**
     * @OA\Get(
     *     path="/study-programs/{studyProgramId}",
     *     tags={"Study Programs"},
     *     summary="Find study program by ID",
     *     description="Returns a single study program object",
     *     operationId="getStudyProgramById",
     *     @OA\Parameter(
     *         name="studyProgramId",
     *         in="path",
     *         description="ID of study program to return",
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
     *         description="Study program not found"
     *     )
     * )
     *
     * @param  StudyProgram  $studyProgram
     * @return StudyProgram $studyProgram
     */
    public function show(StudyProgram $studyProgram)
    {
        return response()->json($studyProgram->load(['university']), ResponseCode::HTTP_OK);
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
        $studyProgram = StudyProgram::find($id);
        $studyProgram->update($input);

        return response()->json($studyProgram, ResponseCode::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $studyProgram = StudyProgram::find($id);
        $studyProgram->delete();

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }

    /**
     * @OA\Get(
     *     path="/study-programs/quick-search",
     *     tags={"Quick search"},
     *     summary="Quick search for study programs. To be used for autocomplete",
     *     description="Returns paginated study programs collection.",
     *     operationId="quickSearchStudyPrograms",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="query param to search study programs",
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

        $studyPrograms = StudyProgram::search($query, null, true, true)->limit(5)->get(['id', 'name', 'relevance']);

        return response()->json($studyPrograms, ResponseCode::HTTP_OK);
    }
}