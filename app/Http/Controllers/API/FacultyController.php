<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Faculty;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class FacultyController extends Controller
{
    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:admin'])->only(['store', 'update', 'destroy']);
    }

    /**
     * @OA\Get(
     *     path="/faculties/",
     *     tags={"Faculties"},
     *     summary="List all Faculties",
     *     description="Returns paginated faculty collection",
     *     operationId="listFaculties",
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
        $faculties = Faculty::with(['university', 'chairs'])->paginate(10);

        return response()->json($faculties, ResponseCode::HTTP_OK);
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
            'university_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $faculty = Faculty::create($input);

        return response()->json($faculty, ResponseCode::HTTP_CREATED);
    }

    /**
     * @OA\Get(
     *     path="/faculties/{facultyId}",
     *     tags={"Faculties"},
     *     summary="Find faculty by ID",
     *     operationId="getFacultyById",
     *     description="Returns a single faculty object",
     *     @OA\Parameter(
     *         name="facultyId",
     *         in="path",
     *         description="ID of faculty to return",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Faculty"),
     *         @OA\XmlContent(ref="#/components/schemas/Faculty"),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplier"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Faculty not found"
     *     )
     * )
     *
     * @param Faculty $faculty
     * @return Faculty
     */
    public function show(Faculty $faculty)
    {
        return $faculty->load(['university', 'chairs']);
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
        $faculty = Faculty::find($id);
        $faculty->update($input);

        return response()->json($faculty, ResponseCode::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $faculty = Faculty::find($id);
        $faculty->delete();

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }
}