<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Course;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    //TODO: rates calculating in models

    public function index()
    {
        $courses = Course::with(['chair', 'professors', 'reviews', 'avgRating'])
            ->withCount('reviews')
            ->paginate(10);

        return $courses;
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
            'chair_id' => 'required',
            'course_type' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $course = Course::create($input);

        return $course;
    }

    /**
     * Display the specified resource.
     *
     * @param  Course  $course
     * @return Course  $course
     */
    public function show(Course $course)
    {
        return $course->load(['professors', 'chair', 'avgRating']);
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
        $course = Course::find($id);
        $course->update($input);

        return $course;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $course = Course::find($id);
        $course->delete();

        return response()->json(['success'=>''], 401);
    }
}
