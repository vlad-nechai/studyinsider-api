<?php

namespace App\Http\Controllers;

use App\CourseTag;
use App\Skill;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Course;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{

    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:super-admin'])->only(['store', 'update', 'destroy']);
    }

    //TODO: Validators for filters and sorting
    public function index(Request $request)
    {
        // array with attributes to be appended to pagination object
        $appendArr = [];

        // query for all courses
        // TODO: more elegant way
        $courses = Course::where('id', '>', '0');

        // filter by star rating
        if ($request->filled('star_rating')) {
            // TODO: add validator
            $rating = $request->input('star_rating');

            $appendArr['star_rating'] = $rating;

            $courses->whereHas('reviews', function ($query) use ($rating) {
                $query->where('star_rating', '=', $rating);
            });
        }

        // filter by professors
        if ($request->filled('professor')) {
            // TODO: add validator
            $professors = $request->input('professor');

            $appendArr['professor'] = $professors;

            $courses->whereHas('professors', function ($query) use ($professors) {
                $query->whereIn('id', $professors);
            });
        }

        // sort by name
        if ($request->filled('sort_name')) {
            // TODO: add validator
            $sort = strtolower($request->input('sort_name'));

            $appendArr['sort_name'] = $sort;

            if ($sort === 'desc' || $sort === 'asc') {
                $courses->orderBy('name', $sort);
            }
        }

        return $courses->with([
            'chair',
            'professors',
            'reviews',
            'avgRating',
            'topTags'])
            ->withCount('reviews')
            ->paginate(10)
            ->appends($appendArr);
    }

    /**
     * TODO: check more elegant Validators functions
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
        return $course->load([
            'professors',
            'chair',
            'avgRating',
            'avgDifficulty',
            'avgUsefulness',
            'percentageTakeAgain',
            'percentageMustAttend',
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
     * @return Course
     */
    public function review(Request $request, $id) {
        $course = Course::find($id);

        $user = Auth::user();

        if ($course->reviews()->exists()) {
            $course->reviews()->sync([$user->id => $request->all()], false);
        } else {
            $course->reviews()->save($user, $request->all());
        }

        return $course;

    }

    /**
     * TODO: attach responses
     * Attach tags to the course.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function attachTags(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'star_rating' => 'required',
            'tags' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $course = Course::find($id);

        $user = Auth::user();

        $tags = $request->input('tags');

        //detaching old relationships
        if ($course->usersWhoTagged()->exists() && count($tags) > 0) {
            $course->usersWhoTagged()->detach([$user->id]);
        }

        foreach ($tags as $tag) {
            $courseTag = CourseTag::firstOrNew([
                'tag' => $tag,
                'star_rating' => $request->input('star_rating')
            ]);

            $courseTag->star_rating = $request->input('star_rating');
            $courseTag->tag_type = $courseTag->tag_type == null ? 'user_determined' : $courseTag->tag_type;
            $courseTag->save();

            //attaching relationships
            $course->usersWhoTagged()->save($user, ['tag_id' => $courseTag->id]);
        }
    }

    /**
     * Attach skills to the course.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function attachSkills(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'skills' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $course = Course::find($id);

        $user = Auth::user();

        $skills = $request->input('skills');

        //detaching old relationships
        if ($course->usersWhoAddedSkills()->exists() && count($skills) > 0) {
            $course->usersWhoAddedSkills()->detach([$user->id]);
        }

        foreach ($skills as $skill) {
            $courseSkill = Skill::firstOrNew([
                'name' => $skill
            ]);

            $courseSkill->language = $courseSkill->language == null ? 'de' : $courseSkill->language;
            $courseSkill->origin = $courseSkill->origin == null ? 'user_determined' : $courseSkill->origin;
            $courseSkill->save();

            //attaching relationships
            $course->usersWhoAddedSkills()->save($user, ['skill_id' => $courseSkill->id]);
        }
    }

    /**
     * Search for courses
     *
     * @param Request $request
     * @return mixed
     */
    public function search(Request $request) {
        $query = $request->input('q');

        $courses = Course::search($query)
            ->with(['chair', 'professors', 'reviews', 'avgRating', 'topTags', 'reviewsCount'])
            ->paginate(10);

        return $courses;
    }

}
