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
     * Display a listing of the resource.
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
     * Display the specified resource.
     *
     * @param  StudyProgram $studyProgram
     * @return Response
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
     * Quick search majors
     *
     * @param Request $request
     * @return mixed
     */
    public function quickSearch(Request $request) {
        $query = $request->input('q');

        $studyPrograms = StudyProgram::search($query, null, true, true)->limit(5)->get(['id', 'name', 'relevance']);

        return response()->json($studyPrograms, ResponseCode::HTTP_OK);
    }
}