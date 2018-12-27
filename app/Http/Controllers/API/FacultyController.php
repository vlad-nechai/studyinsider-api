<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Faculty;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class FacultyController extends Controller
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
     * Display the specified resource.
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