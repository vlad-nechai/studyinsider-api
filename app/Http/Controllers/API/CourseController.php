<?php

namespace App\Http\Controllers\API;

use App\Models\Chair;
use App\Models\CourseTag;
use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\Semester;
use App\Models\Skill;
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

    /**
     * @OA\Get(
     *     path="/courses/",
     *     tags={"Courses"},
     *     summary="List all courses",
     *     description="Returns paginated course collection.",
     *     operationId="getCourses",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="query param to search courses",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="faculty",
     *         in="query",
     *         description="Faculty ids to filter courses. Query to look like faculty=[1,2,3], where 1,2,3 = IDs of faculties.",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="professor",
     *         in="query",
     *         description="Professor ids to filter courses. Query to look like professor=[1,2,3], where 1,2,3 = IDs of professors.",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="sort_name",
     *         in="query",
     *         description="Sort parameter. It is either 'asc' or 'desc'",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Server error"
     *     )
     * )
     *
     * @param Request $request
     * @return Response
     *
     */
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

        // TODO: filter by semester
        if ($request->filled('semester_id')) {
            $semesterId = $request->input('semester_id');
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
     * The endpoint is not exposed to Swagger API
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
     * @OA\Get(
     *     path="/courses/{courseId}",
     *     tags={"Courses"},
     *     summary="Find course by ID",
     *     description="Returns a single course object",
     *     operationId="getCourse",
     *     @OA\Parameter(
     *         name="courseId",
     *         in="path",
     *         description="ID of course to return",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Course"),
     *         @OA\XmlContent(ref="#/components/schemas/Course"),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplier"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Course not found"
     *     )
     * )
     *
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

    /** TODO: rewrite and fix
     * @OA\Post(path="/courses/{courseId}/review/semester/{semesterId}",
     *   tags={"Courses"},
     *   security={{"bearerAuth":{}}},
     *   summary="Review a course for a given semester.",
     *   description="Review a course for a given semester.",
     *   operationId="reviewCourseForSemester",
     *   @OA\Parameter(
     *      name="courseId",
     *      in="path",
     *      description="ID of course for review",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="semesterId",
     *      in="path",
     *      description="ID of semester for review",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\RequestBody(
     *      required=true,
     *      description="Review course object",
     *      @OA\JsonContent(ref="#/components/schemas/Review")
     *
     *   ),
     *   @OA\Response(
     *      response=201,
     *      description="successful creation",
     *      @OA\JsonContent(ref="#/components/schemas/Review")
     *   ),
     * )
     *
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
            return response()->json(['message' => 'Course with this ID does not exist'], ResponseCode::HTTP_NOT_FOUND);
        }

        try {
            $semester = Semester::findOrFail($semesterId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Semester with this ID does not exist'], ResponseCode::HTTP_NOT_FOUND);
        }

        $reviewExists = $course->reviews()->where([
            'user_id' => $user->id,
            'semester_id' => $semesterId])
            ->exists();

        // We do not override reviews, so we throw an exception if one exists
        if ($reviewExists) {
            // $course->reviews()->sync([$user->id => $request->all()], false);
            return response()->json(['message' => 'Review can not be overwritten'], ResponseCode::HTTP_BAD_REQUEST);
        } else {
            $input = $request->all();
            $input["user_id"] = $user->id;
            $input["semester_id"] = $semesterId;
            $input["course_id"] = $courseId;

            // persist review
            $review = Review::create($input);

            // attach skills
            $skills = $input["skills"];
            if (!empty($skills)) {
                foreach ($skills as $skill) {
                    $courseSkill = Skill::firstOrNew([
                        'name' => $skill['name']
                    ]);
                    $review->skills()->save($courseSkill, ['course_id' => $courseId]);
                }
            }

            // attach tags
            $tags = $input['tags'];
            if (!empty($tags)) {
                foreach ($tags as $tag) {
                    $courseTag = CourseTag::firstOrNew([
                        'tag' => $tag['tag']
                    ]);
                    $review->tags()->save($courseTag, ['course_id' => $courseId]);
                }
            }

            return $review->load(['skills', 'tags']);
        }
    }

    /**
     * @OA\Get(
     *     path="/courses/quick-search",
     *     tags={"Quick search"},
     *     summary="Quick search for courses. To be used for autocomplete",
     *     description="Returns paginated course collection.",
     *     operationId="quickSearchCourses",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="query param to search courses",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Server error"
     *     )
     * )
     *
     * @param Request $request
     * @return Response
     *
     */
    public function quickSearch(Request $request) {
        $query = $request->input('q');

        $courses = Course::search($query, null, true, true)
            ->limit(7)
            ->get(['id', 'name', 'relevance']);

        return response()->json($courses, ResponseCode::HTTP_OK);
    }



    /*
    |--------------------------------------------------------------------------
    | Deprecated actions
    |--------------------------------------------------------------------------
    |
    | List of deprecated actions.
    |
    */


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
}
