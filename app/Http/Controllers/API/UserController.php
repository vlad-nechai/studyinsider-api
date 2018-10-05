<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use function PHPSTORM_META\elementType;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;

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
            'password' => 'required',
            'c_password' => 'required|same:password',
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
            'sex' => 'required',
            'major_id' => 'required',
            'password'=> 'required',
            'c_password' => 'required|same:password',
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
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
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
    }

    /**
     * details api
     * @param integer $id
     * @return \Illuminate\Http\Response
     */
    public function addBookmark($id)
    {
        $user = Auth::user();

        $message = "Course is already bookmarked";
        $bookmark = $user->bookmarks()->where('course_id', $id)->first();
        if (is_null($bookmark)) {
            $user->bookmarks()->attach($id);
            $message = "Course successfully bookmarked";
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
        $message = "Course bookmark has been deleted";
        return response()->json(['message' => $message, 'user' => $user], $this->successStatus);
    }
}
