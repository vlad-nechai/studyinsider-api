<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Professor;
use Illuminate\Support\Facades\Validator;


class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        $professors = Professor::with(['chair', 'courses'])->has('courses')->paginate(10);

        return $professors;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
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
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $professor = Professor::create($input);

        return $professor;
    }

    /**
     * Display the specified resource.
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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $professor = Professor::find($id);
        $professor->update($input);

        return $professor;
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

        return response()->json(['success'=>'deleted'], 401);
    }

    /**
     * Quick search professors for filters
     *
     * @param Request $request
     * @return mixed
     */
    public function quickSearch(Request $request) {
        $query = $request->input('q');

        $professors = Professor::search($query, null, true, true)->limit(7)->get(['id', 'name', 'relevance']);


        return $professors;
    }
}
