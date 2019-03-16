<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Chair;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class ChairController extends Controller
{

    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:admin'])->only(['store', 'update', 'destroy']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $chairs = Chair::with(['courses', 'professors'])->paginate(10);

        return response()->json($chairs, ResponseCode::HTTP_OK);
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
            'faculty_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $chair = Chair::create($input);

        return response()->json($chair, ResponseCode::HTTP_CREATED);
    }

    /**
     * @OA\Get(
     *     path="/chairs/{chairId}",
     *     tags={"chair"},
     *     summary="Find chair by ID",
     *     description="Returns a single chair object",
     *     operationId="getPetById",
     *     @OA\Parameter(
     *         name="chairId",
     *         in="path",
     *         description="ID of chair to return",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Chair"),
     *         @OA\XmlContent(ref="#/components/schemas/Chair"),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplier"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Chair not found"
     *     )
     * )
     *
     * @param Chair $chair
     * @return Chair
     */
    public function show(Chair $chair)
    {
        $chair->load(['courses', 'professors', 'faculty']);

        return response()->json($chair, ResponseCode::HTTP_OK);
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
        $chair = Chair::find($id);
        $chair->update($input);

        return response()->json($chair, ResponseCode::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $chair = Chair::find($id);
        $chair->delete();

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }
}
