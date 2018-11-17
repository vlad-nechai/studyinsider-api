<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    // TODO: response errors with codes
    public $successStatus = 200;
    public $unauthorizedStatus = 401;
    public $internalServerErrorStatus = 500;

    /**
     * login with with Laravel Passport
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function loginLaravelPassport(Request $request){
        if(Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])){
            $user = Auth::user();
            $success['token'] =  $user->createToken('Evalooni angular')-> accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else{
            return response()->json(['error'=>'invalid credentials'], $this->unauthorizedStatus);
        }
    }

    /**
     * Register with Laravel Passport
     * @param Request $request
     * @return \Illuminate\Http\Response
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
            return response()->json(['error'=>$validator->errors()], 400);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('Evalooni angular')-> accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], $this->successStatus);
    }

    /**
     * login with JWT
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function loginJWT(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), 400]);
        }

        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid credentials'], 403);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could not create token'], $this->internalServerErrorStatus);
        }

        return response()->json(compact('token'), $this->successStatus);
    }

    /**
     * login with JWT
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function registerJWT(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'name' => 'required',
            'username' => 'required',
            'sex' => 'required',
            'major_id' => 'required',
            'password'=> 'required|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        try {

            // default image
            if ($input['sex'] == 0) {
                $input['image'] = '/assets/images/girl2.jpg';
            } else {
                $input['image'] = '/assets/images/guy2.jpg';
            }

            $user = User::create($input);
            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e) {
            return response()->json(['error' => 'could not get user from token'], $this->internalServerErrorStatus);
        }

        return response()->json(compact('token'), $this->successStatus);
    }

    /**
     * user profile data
     *
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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

            $user->image = '/assets/images/profile-pictures/' . $name;
            $user->save();

            return response()->json(['message' => 'user image was successfully saved'], $this->successStatus);
        }
    }

    /**
     * delete user profile
     *
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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
     * @return \Illuminate\Http\Response
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
