<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Chair;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class ChairController extends Controller
{

    // TODO: fix roles
    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:super-admin'])->only(['store', 'update', 'destroy']);
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
     * Display the specified resource.
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
