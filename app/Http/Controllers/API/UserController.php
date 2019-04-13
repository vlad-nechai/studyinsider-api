<?php

namespace App\Http\Controllers\API;

use App\Models\Course;
use App\Models\Semester;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\HttpFoundation\Response as ResponseCode;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{

    /**
     * @OA\Post(
     *     path="/login",
     *     tags={"Users"},
     *     summary="Login for users. If you want login as admin use login ´admin@test.com´ and password ´12345678´.",
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
     *              @OA\Schema(ref="#/components/schemas/Credentials")
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
     *              allOf={
     *                  @OA\Schema(ref="#/components/schemas/User"),
     *                  @OA\Schema(
     *                      required={"password_confirmation"},
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
            'study_program_id' => 'required',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

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
     * User profile data
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
     * @param Request $request user data to be edited
     * @return Response
     */
    public function edit(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'username' => 'required|unique:users',
            'gender' => 'required',
            'study_program_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        // email and password shall not be edited here
        $input = $request->except(['email', 'password']);

        $user->update($input);

        $user->load([
            'studyProgram',
            'bookmarks.topSkills',
            'bookmarks.topTags',
            'reviews.skills',
            'reviews.tags'
        ]);
        return response()->json($user, ResponseCode::HTTP_ACCEPTED);
    }


    /**
     * Edit User password
     *
     * @param Request $request user data to be edited
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

        return response()->json(['message' => 'password has been successfully changed'], ResponseCode::HTTP_ACCEPTED);

    }

    /**
     * TODO: fix, it does not work
     * user image upload
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
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
            $name = str_slug($user->name, '_') . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/assets/images/profile-pictures');
            $imagePath = $destinationPath . "/" . $name;
            $image->move($destinationPath, $name);

            $user->image = 'https://studyinsider.de/assets/images/profile-pictures/' . $name;
            $user->save();

            return response()->json(['message' => 'user image was successfully saved'], $this->successStatus);
        }
    }

    /**
     * Delete User profile
     *
     * @return Response
     */
    public function delete()
    {
        $user = Auth::user();

        $user->delete();

        return response()->json(['message' => 'user was successfully deleted'], ResponseCode::HTTP_NO_CONTENT);
    }

    /**
     * Adding bookmark for a specific semester
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
            'semester_id' => $semesterId])
            ->exists();

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
     * @param integer $semesterId
     * @return Response
     */
    public function semesterBookmarks($semesterId)
    {
        $user = Auth::user();

        try {
            $semester = Semester::findOrFail($semesterId);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Semester with this ID does not exist'], ResponseCode::HTTP_BAD_REQUEST);
        }

        $bookmarks = $user->bookmarks()->wherePivot('semester_id', $semesterId)->get();

        return response()->json($bookmarks->load(['topSkills', 'topTags']), ResponseCode::HTTP_OK);
    }
}
