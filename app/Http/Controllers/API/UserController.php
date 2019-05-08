<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Review;
use App\Models\Semester;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response as ResponseCode;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | User authentication
    |--------------------------------------------------------------------------
    */

    /**
     * @OA\Post(
     *     path="/login",
     *     tags={"Users"},
     *     summary="Login for users. Test login credentials are: login ´admin@studyinsider.de´ and password ´12345678´.",
     *     operationId="userLogin",
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(
     *            @OA\Property(property="token", type="string"),
     *         )
     *     ),
     *     @OA\RequestBody(
     *         description="Login credentials",
     *         required=true,
     *         @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  @OA\Property(
     *                      property="email",
     *                      type="string",
     *                      default="admin@studyinsider.de"
     *                  ),
     *                  @OA\Property(
     *                      property="password",
     *                      type="string",
     *                      default="12345678"
     *                  )
     *              )
     *          )
     *     )
     * )
     *
     * @param  Request $request
     * @return Response
     *
     */
    public function loginJWT(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }

        $credentials = $request->only('email', 'password');
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'invalid credentials'], ResponseCode::HTTP_UNAUTHORIZED);
        }

        return response()->json(compact('token'), ResponseCode::HTTP_OK);
    }

    /**
     * @param Request $request
     * @return Response
     *
     * @OA\Post(path="/register",
     *   tags={"Users"},
     *   summary="Register as a user.",
     *   description="Register as a new user.",
     *   operationId="registerUser",
     *   @OA\RequestBody(
     *       required=true,
     *       description="Created user object",
     *       @OA\MediaType(
     *           mediaType="multipart/form-data",
     *           @OA\Schema(
     *              description="Credentials for register",
     *              title="Credentials for register",
     *              type="object",
     *              required={"password_confirmation", "study_program", "gender"},
     *              allOf={
     *                  @OA\Schema(ref="#/components/schemas/User"),
     *                  @OA\Schema(
     *                      @OA\Property(property="password_confirmation", type="string"),
     *                  )
     *              }
     *           )
     *       )
     *   ),
     *   @OA\Response(
     *      response=200,
     *      description="successful operation",
     *         @OA\JsonContent(
     *              @OA\Property(property="token", type="string"),
     *
     *     ),
     *   )
     * )
     */
    public function registerJWT(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'first_name' => 'required',
            'last_name' => 'required',
            'username' => 'required|unique:users',
            'gender' => 'required',
            'study_program' => 'required',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        // get study program
        $studyProgram = json_decode($request->get('study_program'));
        $input['study_program_id'] = $studyProgram->id;

        // default image
        if ($input['gender'] == 0) {
            $input['image'] = 'https://studyinsider.de/assets/images/girl2.jpg';
        } else {
            $input['image'] = 'https://studyinsider.de/assets/images/guy2.jpg';
        }

        $user = User::create($input);
        $token = JWTAuth::fromUser($user);

        return response()->json(compact('token'), ResponseCode::HTTP_OK);
    }

    /**
     * @OA\Put(
     *     path="/profile/token",
     *     tags={"Users"},
     *     security={{"bearerAuth":{}}},
     *     summary="Refresh access token when expired.",
     *     operationId="refreshAccessToken",
     *     @OA\Response(
     *         response=202,
     *         description="successful token refresh",
     *         @OA\JsonContent(
     *            @OA\Property(property="token", type="string"),
     *         )
     *     )
     * )
     * @return \Illuminate\Http\JsonResponse
     */
    public function refreshJWT() {
        try {
            $oldToken = JWTAuth::getToken();
            $token = JWTAuth::refresh($oldToken);
        } catch (TokenInvalidException $e) {
            return response()->json(['error' => $e->getMessage()], ResponseCode::HTTP_UNAUTHORIZED);
        }

        return response()->json(compact('token'), ResponseCode::HTTP_ACCEPTED);
    }



    /*
    |--------------------------------------------------------------------------
    | User profile and User edit
    |--------------------------------------------------------------------------
    */

    /**
     * @OA\Post(path="/profile",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Get user information.",
     *   description="Get user profile information.",
     *   operationId="getUser",
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(type="array",
     *           @OA\Items(ref="#/components/schemas/User")
     *         )
     *     ),
     * )
     *
     * @return Response
     */
    public function profile()
    {
        try {
            $user = Auth::user();
            $user->load([
                'studyProgram',
//                'bookmarks.topSkills',
//                'bookmarks.topTags',
//                'reviews.skills',
//                'reviews.tags'
            ]);

            return response()->json($user, ResponseCode::HTTP_OK);

        } catch (UnauthorizedHttpException $exception) {

            return response()->json(['error' => 'user not found'], ResponseCode::HTTP_UNAUTHORIZED);

        }
    }

    /**
     * Edit User profile data
     *
     * @OA\Put(path="/profile",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Edit user profile.",
     *   description="Edit user profile information.",
     *   operationId="editUser",
     *   @OA\RequestBody(
     *      required=false,
     *      description="successful operation",
     *      @OA\MediaType(
     *          mediaType="application/json",
     *          @OA\Schema(
     *              required={"first_name", "last_name", "username", "gender"},
     *              @OA\Property(property="first_name", type="string"),
     *              @OA\Property(property="last_name", type="string"),
     *              @OA\Property(property="username", type="string"),
     *              @OA\Property(property="gender", type="string"),
     *          )
     *      )
     *   ),
     *   @OA\Response(
     *      response=202,
     *      description="successful operation",
     *      @OA\JsonContent(ref="#/components/schemas/User")
     *   ),
     * )
     *
     *
     * @param Request $request user data to be edited
     * @return Response
     */
    public function edit(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'username' => 'required|unique:users,username,'.$user->id,
            'gender' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        // email and password shall not be edited here
        $input = $request->except(['email', 'password', 'study_program_id']);

        $user->update($input);

        $user->load([
            'studyProgram'
        ]);
        return response()->json($user, ResponseCode::HTTP_ACCEPTED);
    }

    /**
     * Edit User profile data
     *
     * @OA\Put(path="/profile/edit-image",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Edit user profile.",
     *   description="Edit user image.",
     *   operationId="editUserImage",
     *   @OA\RequestBody(
     *      required=false,
     *      description="successful operation",
     *      @OA\MediaType(
     *          mediaType="application/json",
     *          @OA\Schema(
     *              required={"image"},
     *              @OA\Property(property="image", type="string")
     *          )
     *      )
     *   ),
     *   @OA\Response(
     *      response=202,
     *      description="successful operation",
     *      @OA\JsonContent(ref="#/components/schemas/User")
     *   ),
     * )
     *
     *
     * @param Request $request user data to be edited
     * @return Response
     */
    public function editImage(Request $request) {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'image' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        $image = $request->get('image');
        $user->image = $image;
        $user->save();

        $user->load(['studyProgram']);
        return response()->json($user, ResponseCode::HTTP_ACCEPTED);
    }


    /**
     * Edit User password
     *
     * @OA\Put(path="/profile/edit-password",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Edit user password.",
     *   description="Edit user password.",
     *   operationId="editUserPassword",
     *   @OA\RequestBody(
     *      required=false,
     *      description="successful operation",
     *      @OA\MediaType(
     *          mediaType="application/json",
     *          @OA\Schema(
     *              required={"password", "password_confirmation"},
     *              @OA\Property(property="password", type="string"),
     *              @OA\Property(property="password_confirmation", type="string")
     *          )
     *      )
     *   ),
     *   @OA\Response(
     *      response=202,
     *      description="successful operation",
     *      @OA\JsonContent(ref="#/components/schemas/User")
     *   ),
     * )
     *
     *
     * @param Request $request user password to be changed
     * @return Response
     */
    public function editPassword(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'password' => 'required|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        $password = bcrypt($request->input('password'));

        $user->password = $password;
        $user->save();

        $user->load([
            'studyProgram'
        ]);

        return response()->json($user, ResponseCode::HTTP_ACCEPTED);

    }

    /**
     * Upload User image
     *
     * @OA\Post(path="/profile/image",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Upload user image.",
     *   description="Upload user image.",
     *   operationId="uploadUserImage",
     *   @OA\RequestBody(
     *      description="user image",
     *      required=true,
     *      @OA\MediaType(
     *          mediaType="multipart/form-data",
     *          @OA\Schema(
     *              @OA\Property(
     *                  property="image",
     *                  type="file"
     *              )
     *          )
     *      )
     *   ),
     *   @OA\Response(
     *      response=202,
     *      description="successful operation",
     *      @OA\JsonContent(ref="#/components/schemas/User")
     *   ),
     * )
     *
     *
     * @param Request $request user password to be changed
     * @return Response
     */
    public function uploadImage(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $name = str_slug($user->username, '_') . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/assets/images/profile-pictures');
            $imagePath = $destinationPath . "/" . $name;
            $image->move($destinationPath, $name);

            $user->image = 'https://studyinsider.de/assets/images/profile-pictures/' . $name;
            $user->save();

            return response()->json($user, ResponseCode::HTTP_ACCEPTED);
        }
    }

    /**
     * Delete User profile
     *
     * @OA\Delete(path="/profile",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Delete user.",
     *   description="Delete user .",
     *   operationId="deleteUser",
     *   @OA\Response(
     *      response=204,
     *      description="successful deletion operation",
     *   ),
     * )
     * @return Response
     */
    public function delete()
    {
        $user = Auth::user();

        $user->delete();

        return response()->json(['message' => 'user was successfully deleted'], ResponseCode::HTTP_NO_CONTENT);
    }

    /*
    |--------------------------------------------------------------------------
    | User reviews
    |--------------------------------------------------------------------------
    */

    /**
     * @OA\Get(path="/profile/reviews",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Get all user reviews.",
     *   description="Get all user reviews.",
     *   operationId="getAllUserReviews",
     *   @OA\RequestBody(
     *       required=false,
     *   ),
     *   @OA\Response(
     *       response=200,
     *       description="successful operation",
     *       @OA\JsonContent(
     *          type="array",
     *          @OA\Items(ref="#/components/schemas/Review")
     *       )
     *   ),
     * )
     *
     * @return Response
     */
    public function getAllUserReviews() {
        try {
            $user = Auth::user();
            $reviews = Review::where('user_id', $user->id)
                ->with(['skills', 'tags', 'user.studyProgram'])
                ->get();

            return response()->json($reviews, ResponseCode::HTTP_OK);

        } catch (UnauthorizedHttpException $exception) {

            return response()->json(['error' => 'user not found'], ResponseCode::HTTP_UNAUTHORIZED);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | User bookmarks
    |--------------------------------------------------------------------------
    */

    /**
     * Adding bookmark for a specific semester
     *
     * @OA\Post(path="/bookmarks/{courseId}/semester/{semesterId}",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Bookmark a course for a semester.",
     *   description="Bookmark a course for a semester.",
     *   operationId="bookmarkCourseForSemester",
     *   @OA\Parameter(
     *      name="courseId",
     *      in="path",
     *      description="ID of course for bookmark",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="semesterId",
     *      in="path",
     *      description="ID of semester for bookmark",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\Response(
     *      response=201,
     *      description="successful operation"
     *   ),
     * )
     *
     * @param integer $courseId
     * @param integer $semesterId
     * @return Response
     */
    public function addBookmark($courseId, $semesterId)
    {
        $user = Auth::user();

        try {
            $course = Course::findOrFail($courseId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Course with this ID does not exist'], ResponseCode::HTTP_BAD_REQUEST);
        }

        $bookmarkExists = $user->bookmarks()->where([
            'course_id' => $course->id,
            'semester_id' => $semesterId
        ])->exists();

        if ($bookmarkExists) {
            return response()->json(['message' => 'Course is saved already'], ResponseCode::HTTP_ALREADY_REPORTED);
        } else {
            $user->bookmarks()->save($course, ['semester_id' => $semesterId]);
            return response()->json(['message' => 'Course has been successfully saved'], ResponseCode::HTTP_CREATED);
        }
    }

    /**
     * Deletes bookmark for a given semester
     *
     * @OA\Delete(path="/bookmarks/{courseId}/semester/{semesterId}",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Delete bookmark for a semester.",
     *   description="Delete bookmark for a semester.",
     *   operationId="deleteBookmarkCourseForSemester",
     *   @OA\Parameter(
     *      name="courseId",
     *      in="path",
     *      description="ID of the course",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="semesterId",
     *      in="path",
     *      description="ID of the semester",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\Response(
     *      response=204,
     *      description="successful deletion operation"
     *   ),
     * )
     *
     * @param integer $courseId
     * @param integer $semesterId
     * @return Response
     */
    public function deleteBookmark($courseId, $semesterId)
    {
        $user = Auth::user();

        try {
            $course = Course::findOrFail($courseId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Course with this ID does not exist'], ResponseCode::HTTP_BAD_REQUEST);
        }

        $user->bookmarks()
            ->wherePivot('semester_id', $semesterId)
            ->detach($course->id, ['semester_id' => $semesterId]);

        return response()->json('', ResponseCode::HTTP_NO_CONTENT);
    }

    /**
     * Lists bookmarks for a given semester for the user
     *
     *
     * @OA\Get(path="/profile/bookmarks/{semesterId}",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Get user bookmarks for a semester.",
     *   description="Get user bookmarks for a semester.",
     *   operationId="getSemesterUserBookmarks",
     *   @OA\RequestBody(
     *       required=false,
     *   ),
     *   @OA\Parameter(
     *      name="semesterId",
     *      in="path",
     *      description="ID of the semester",
     *      required=true,
     *      @OA\Schema(
     *          type="integer",
     *          format="int64"
     *      )
     *   ),
     *   @OA\Response(
     *       response=200,
     *       description="successful operation",
     *       @OA\JsonContent(
     *          type="array",
     *          @OA\Items(ref="#/components/schemas/Course")
     *       )
     *   ),
     * )
     *
     * @param integer $semesterId
     * @return Response
     */
    public function semesterBookmarks($semesterId)
    {
        $user = Auth::user();

        try {
            Semester::findOrFail($semesterId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Semester with this ID does not exist'], ResponseCode::HTTP_BAD_REQUEST);
        }

        $bookmarks = $user->bookmarks()->wherePivot('semester_id', $semesterId)->get();

        return response()->json($bookmarks->load(['topSkills', 'topTags']), ResponseCode::HTTP_OK);
    }

    /**
     * @OA\Get(path="/profile/bookmarks",
     *   tags={"Users"},
     *   security={{"bearerAuth":{}}},
     *   summary="Get all user bookmarks.",
     *   description="Get all user bookmarks.",
     *   operationId="getAllUserBookmarks",
     *   @OA\RequestBody(
     *       required=false,
     *   ),
     *   @OA\Response(
     *       response=200,
     *       description="successful operation",
     *       @OA\JsonContent(
     *          type="array",
     *          @OA\Items(ref="#/components/schemas/Course")
     *       )
     *   ),
     * )
     *
     * @return Response
     */
    public function getAllUserBookmarks() {

        $user = Auth::user();

        $bookmarks = $user->bookmarks()->get();

        return response()->json($bookmarks->load(['topSkills', 'topTags']), ResponseCode::HTTP_OK);

    }
}
