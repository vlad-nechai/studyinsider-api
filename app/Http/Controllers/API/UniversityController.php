<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\University;
use Illuminate\Support\Facades\Validator;

class UniversityController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return LengthAwarePaginator
     */
    public function index()
    {
        $universities = University::with(['faculties'])->paginate(10);

        return $universities;
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
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $university = University::create($input);

        return $university;
    }

    /**
     * Display the specified resource.
     *
     * @param  University  $university
     * @return University
     */
    public function show(University $university)
    {
        return $university->load(['faculties', 'studyPrograms']);
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

        return $university;
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

        return response()->json(['success'=>'deleted'], 200);
    }
}