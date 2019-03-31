<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\University;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class UniversityController extends Controller
{

    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:admin'])->only(['store', 'update', 'destroy']);
    }

    /**
     * @OA\Get(
     *     path="/universities/",
     *     tags={"Universities"},
     *     summary="List all universities",
     *     description="Returns paginated university collection",
     *     operationId="listUniversities",
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
        $universities = University::with(['faculties'])->paginate(10);

        return response()->json($universities, ResponseCode::HTTP_OK);
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
            'location' => 'required',
            'type' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $university = University::create($input);

        return response()->json($university, ResponseCode::HTTP_CREATED);
    }

    /**
     * @OA\Get(
     *     path="/universities/{universityId}",
     *     tags={"Universities"},
     *     summary="Find university by ID",
     *     operationId="getUniversityById",
     *     description="Returns a single university object",
     *     @OA\Parameter(
     *         name="universityId",
     *         in="path",
     *         description="ID of university to return",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/University"),
     *         @OA\XmlContent(ref="#/components/schemas/University"),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplier"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="University not found"
     *     )
     * )
     *
     * @param  University  $university
     * @return University
     */
    public function show(University $university)
    {
        $university->load(['faculties', 'studyPrograms']);

        return response()->json($university, ResponseCode::HTTP_OK);
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
        $university = University::find($id);
        $university->update($input);

        return response()->json($university, ResponseCode::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $university = University::find($id);
        $university->delete();

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }
}