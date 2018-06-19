<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Faculty;
use Illuminate\Support\Facades\Validator;

class FacultyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        $faculties = Faculty::with(['university', 'departments'])->paginate(10);

        return $faculties;
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
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $faculty = Faculty::create($input);

        return $faculty;
    }

    /**
     * Display the specified resource.
     *
     * @param Faculty $faculty
     * @return Faculty
     */
    public function show(Faculty $faculty)
    {
        return $faculty->load(['university', 'departments']);
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

        return $faculty;
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

        return response()->json(['success'=>'deleted'], 200);
    }
}