<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Course;
use Illuminate\Support\Facades\Auth;
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
     * TODO: Add exceptions for not existing skills, tags
     *
     * @param  Course  $course
     * @return Course  $course
     */
    public function show(Course $course)
    {
        return $course->load([
            'professors',
            'chair',
            'avgRating',
            'topTags',
            'topSkills'
        ]);
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

        return response()->json(['success'=>'deleted'], 200);
    }

    /**
     * Attach review to the course.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function review(Request $request, $id) {
        $course = Course::find($id);

        $user = Auth::user();

        $mappedArr = $this->mapRequest($request);

        if ($course->reviews()->exists()) {
            $course->reviews()->sync([$user->id => $mappedArr]);
        } else {
            $course->reviews()->save($user, $mappedArr);
        }
    }

    /**
     * Attach tags to the course.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function attachTags(Request $request, $id) {

    }

    /**
     * Attach skills to the course.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function attachSkills(Request $request, $id) {

    }

    /**
     * TODO: remake it to switch
     * @param Request $request
     * @return mixed
     */
    private function mapRequest(Request $request) {
        $arr = [];
        if ($request->has('star_rating'))
            $arr['star_rating'] = $request['star_rating'];

        if ($request->has('user_major'))
            $arr['user_major'] = $request['user_major'];

        if ($request->has('user_gpa'))
            $arr['user_gpa'] = $request['user_gpa'];

        if ($request->has('user_course_grade'))
            $arr['user_course_grade'] = $request['user_course_grade'];

        if ($request->has('interesting'))
            $arr['interesting'] = $request['interesting'];

        if ($request->has('difficulty'))
            $arr['difficulty'] = $request['difficulty'];

        if ($request->has('usefulness'))
            $arr['usefulness'] = $request['usefulness'];

        if ($request->has('must_attend'))
            $arr['must_attend'] = $request['must_attend'];

        if ($request->has('often_study'))
            $arr['often_study'] = $request['often_study'];

        if ($request->has('take_again'))
            $arr['take_again'] = $request['take_again'];

        if ($request->has('pay_attention_in_class'))
            $arr['pay_attention_in_class'] = $request['pay_attention_in_class'];

        if ($request->has('script'))
            $arr['script'] = $request['script'];

        if ($request->has('clearness'))
            $arr['clearness'] = $request['clearness'];

        if ($request->has('completeness'))
            $arr['completeness'] = $request['completeness'];

        if ($request->has('bullshitmeter'))
            $arr['bullshitmeter'] = $request['bullshitmeter'];

        if ($request->has('relevance'))
            $arr['relevance'] = $request['relevance'];

        if ($request->has('attend_seminars'))
            $arr['attend_seminars'] = $request['attend_seminars'];

        if ($request->has('memorize_script'))
            $arr['memorize_script'] = $request['memorize_script'];

        if ($request->has('do_extra_work'))
            $arr['do_extra_work'] = $request['do_extra_work'];

        if ($request->has('study_old_exams'))
            $arr['study_old_exams'] = $request['study_old_exams'];

        if ($request->has('take_notes'))
            $arr['take_notes'] = $request['take_notes'];

        if ($request->has('come_to_class'))
            $arr['come_to_class'] = $request['come_to_class'];

        if ($request->has('effort'))
            $arr['effort'] = $request['effort'];

        return $arr;

    }
}
