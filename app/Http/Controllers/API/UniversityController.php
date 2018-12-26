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

    /**
     * Display a listing of the resource.
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
     * Display the specified resource.
     *
     * @param  University  $university
     * @return Response
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