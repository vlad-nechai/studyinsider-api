<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\HttpFoundation\Response as ResponseCode;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    // TODO: response errors with codes
    public $successStatus = 200;
    public $unauthorizedStatus = 401;
    public $internalServerErrorStatus = 500;

    /**
     * @deprecated Deprecated: no use in our application
     * login with with Laravel Passport
     * @param Request $request
     * @return Response
     */
    public function loginLaravelPassport(Request $request){
        if(Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('Evalooni angular')-> accessToken;
            return response()->json(['success' => $success], ResponseCode::HTTP_OK);
        }
        else{
            return response()->json(['error'=>'invalid credentials'], ResponseCode::HTTP_UNAUTHORIZED);
        }
    }

    /**
     * @deprecated Deprecated: no use in our application
     * Register with Laravel Passport
     * @param Request $request
     * @return Response
     */
    public function registerLaravelPassport(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('Evalooni angular')-> accessToken;
        $success['name'] =  $user->name;

        return response()->json(['success'=>$success], ResponseCode::HTTP_OK);
    }

    /**
     * login with JWT
     * @param Request $request
     * @return Response
     */
    public function loginJWT(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), ResponseCode::HTTP_BAD_REQUEST]);
        }

        $credentials = $request->only('email', 'password');
        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'invalid credentials'], ResponseCode::HTTP_UNAUTHORIZED);
        }

        return response()->json(compact('token'), ResponseCode::HTTP_OK);
    }

    /**
     * Register User with JWT
     *
     * @param Request $request
     * @return Response
     */
    public function registerJWT(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'first_name' => 'required',
            'last_name' => 'required',
            'username' => 'required|unique:users',
            'gender' => 'required',
            'study_program_id' => 'required',
            'password'=> 'required|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        // default image
        if ($input['gender'] == 0) {
            $input['image'] = 'https://evalooni.de/assets/images/girl2.jpg';
        } else {
            $input['image'] = 'https://evalooni.de/assets/images/guy2.jpg';
        }

        $user = User::create($input);
        $token = JWTAuth::fromUser($user);

        return response()->json(compact('token'), $this->successStatus);
    }

    /**
     * user profile data
     *
     * @return Response
     */
    public function profile()
    {
        try {

            $user = Auth::user();
            $user->load([
                'major',
                'bookmarks.reviews',
                'bookmarks.avgRating',
                'bookmarks.topTags',
                'bookmarks.chair',
                'reviewedCourses.reviews',
                'reviewedCourses.avgRating',
                'reviewedCourses.topTags',
                'reviewedCourses.chair'
            ]);
            return response()->json($user, $this->successStatus);
        } catch (UnauthorizedHttpException $exception) {
            return response()->json(['error' => 'user not found'], $this->unauthorizedStatus);
        }
    }

    /**
     * edit user profile data
     *
     * @param Request $request user data to be edited
     * @return Response
     */
    public function edit(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required', // TODO: unique for username
            'sex' => 'required',
            'major_id' => 'required',
            'password' => 'sometimes|required|confirmed', // when password is changed then validate
            'password_confirmation' => 'sometimes|required|same:password', // when password is changed then validate
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // email shall not be edited
        $input = $request->except(['email']);
        if ($request->has('password')) {
            $input['password'] = bcrypt($input['password']);
        }

        $user->update($input);

        $user->load([
            'major',
            'bookmarks.reviews',
            'bookmarks.avgRating',
            'bookmarks.topTags',
            'bookmarks.chair',
            'reviewedCourses.reviews',
            'reviewedCourses.avgRating',
            'reviewedCourses.topTags',
            'reviewedCourses.chair'
        ]);
        return response()->json($user, $this->successStatus);
    }


    /**
     * edit user password
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
            return response()->json($validator->errors(), 400);
        }

        $password = bcrypt($request->input('password'));

        $user->password = $password;
        $user->save();

        return response()->json(['message' => 'password has been successfully changed'], $this->successStatus);

    }

    /**
     * user image upload
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadImage(Request $request) {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = str_slug($user->name, '_').'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/assets/images/profile-pictures');
            $imagePath = $destinationPath. "/".  $name;
            $image->move($destinationPath, $name);

            $user->image = 'https://evalooni.de/assets/images/profile-pictures/' . $name;
            $user->save();

            return response()->json(['message' => 'user image was successfully saved'], $this->successStatus);
        }
    }

    /**
     * delete user profile
     *
     * @return Response
     */
    public function delete()
    {
        $user = Auth::user();

        $user->delete();

        return response()->json(['message' => 'user was successfully deleted'], $this->successStatus);
    }

    /**
     * details api
     * @param integer $id
     * @return Response
     */
    public function addBookmark($id)
    {
        $user = Auth::user();

        $message = "Die Lehrveranstaltung wurde bereits gespeichert";
        $bookmark = $user->bookmarks()->where('course_id', $id)->first();
        if (is_null($bookmark)) {
            $user->bookmarks()->attach($id);
            $message = "Die Lehrveranstaltung wurde gespeichert";
        }
        $user->load('bookmarks');
        return response()->json(['message' => $message, 'user' => $user], $this->successStatus);
    }

    /**
     * details api
     * @param integer $id
     * @return Response
     */
    public function deleteBookmark($id)
    {
        $user = Auth::user();
        $user->bookmarks()->detach($id);
        $user->load('bookmarks');
        $message = "Die Lehrveranstaltung wurde gelöscht";
        return response()->json(['message' => $message, 'user' => $user], $this->successStatus);
    }
}
