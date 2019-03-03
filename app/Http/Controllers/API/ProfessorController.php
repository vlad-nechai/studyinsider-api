<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Professor;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;


class ProfessorController extends Controller
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
        $professors = Professor::with(['chair', 'courses'])->has('courses')->paginate(10);

        return response()->json($professors, ResponseCode::HTTP_OK);
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
            'gender' => 'required|between:0,1',
            'chair_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $professor = Professor::create($input);

        return response()->json($professor, ResponseCode::HTTP_CREATED);
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
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $professor = Professor::find($id);
        $professor->update($input);

        return response()->json($professor, ResponseCode::HTTP_ACCEPTED);
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

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
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

        return response()->json($professors, ResponseCode::HTTP_OK);
    }
}
