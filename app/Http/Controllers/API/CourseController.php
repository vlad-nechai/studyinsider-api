<?php

namespace App\Http\Controllers\API;

use App\Models\Chair;
use App\Models\CourseTag;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;

class CourseController extends Controller
{

    public function __construct()
    {
        $this->middleware(['jwt.auth', 'role:admin'])->only(['store', 'update', 'destroy']);
    }

    public function index(Request $request)
    {
        //TODO: Validators for filters and sorting
        $validator = Validator::make($request->all(), [
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        // array with attributes to be appended to pagination object
        $appendArr = [];

        // search courses if query was input otherwise load all courses
        // TODO: more elegant way
        if ($request->filled('q')) {
            $q = $request->input('q');
            $appendArr['q'] = $q;
            $courses = Course::search($q);
        } else {
            $courses = Course::where('id', '>', '0');
        }

        // filter by faculties
        if ($request->filled('faculty')) {
            $faculties = json_decode($request->input('faculty'));

            if (count($faculties) > 0) {
                $appendArr['chair'] = $faculties;

                // get all chairs for a faculty
                $chairsIds = Chair::whereIn('faculty_id', $faculties)->pluck('id')->toArray();

                $courses->whereHas('chair', function ($query) use ($chairsIds) {
                    $query->whereIn('id', $chairsIds);
                });
            }
        }

        // TODO: filter by star rating
        if ($request->filled('rating_filter')) {
            $ratingFilter = $request->input('rating_filter');
        }

        // filter by professors
        if ($request->filled('professor')) {
            $professors = json_decode($request->input('professor'));

            if (count($professors) > 0) {
                $appendArr['professor'] = $professors;

                $courses->whereHas('professors', function ($query) use ($professors) {
                    $query->whereIn('id', $professors);
                });
            }
        }

        // sort by name
        if ($request->filled('sort_name')) {
            $sort = strtolower($request->input('sort_name'));

            $appendArr['sort_name'] = $sort;

            if ($sort === 'desc' || $sort === 'asc') {
                $courses->orderBy('name', $sort);
            }
        }

        // TODO: sort by star rating

        return $courses->with([
            'topSkills',
            'topTags'])
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

        return response()->json($course, ResponseCode::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  Course  $course
     * @return Response
     */
    public function show(Course $course)
    {
        $course->load([
            'chair',
            'professors',
            'semesters',
            'reviews.skills',
            'reviews.tags',
            'topSkills',
            'topTags'
        ]);

        return response()->json($course, ResponseCode::HTTP_OK);
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

        return response()->json($course, ResponseCode::HTTP_ACCEPTED);
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

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }


    /**
     * Get course review for the user
     *
     * @deprecated
     * @param  int  $id
     * @return Course
     */
    public function getReview($id)
    {
        $course = Course::find($id);

        $user = Auth::user();

        return $course->load([
            'reviews' => function($q) use ($user) {
                $q->where('courses_rate.user_id', $user->id);
            },
            'reviews.courseTags' => function($q) use ($id) {
                $q->where('courses_rate.course_id', $id);
            },
            'reviews.courseSkills' => function($q) use ($id) {
                $q->where('courses_rate.course_id', $id);
            }]);
    }

    /** TODO: rewrite and fix
     * Attach review to the course with tags and skills
     *
     * @param  Request  $request
     * @param  int  $courseId
     * @param  int  $semesterId
     * @return Response
     */
    public function review(Request $request, $courseId, $semesterId)
    {
        $user = Auth::user();

        try {
            $course = Course::findOrFail($courseId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Course with this ID does not exist'], ResponseCode::HTTP_BAD_REQUEST);
        }

        $reviewExists = $course->reviews()->where([
            'user_id' => $user->id,
            'semester_id' => $semesterId])
            ->exists();

        // TODO: do we overwrite reviews?
        if ($reviewExists) {
            // $course->reviews()->sync([$user->id => $request->all()], false);
        } else {
            $course->reviews()->save($user, $request->all());
        }

        return $course->load(['avgRating']);
    }

    /**
     * Attach tags to the course.
     *
     * @deprecated
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

        return $course->load(['topTags']);
    }

    /**
     * Attach skills to the course.
     *
     * @deprecated
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

        return $course->load(['topSkills']);
    }

    /**
     * Load previous reviews for a course
     *
     * @deprecated
     * @param  int  $id
     * @return Course  $course
     */
    public function loadReviews($id)
    {
        return Course::find($id)->load([
            'reviews.courseTags' => function($q) use ($id) {
                $q->where('courses_rate.course_id', $id);
            },
            'reviews.courseSkills' => function($q) use ($id) {
                $q->where('courses_rate.course_id', $id);
            }, 'reviews.major']);
    }


    /**
     * Search for courses
     *
     * @param Request $request
     * @return Response
     */
    public function quickSearch(Request $request) {
        $query = $request->input('q');

        $courses = Course::search($query, null, true, true)
            ->limit(7)
            ->get(['id', 'name', 'relevance']);

        return response()->json($courses, ResponseCode::HTTP_OK);
    }
}
