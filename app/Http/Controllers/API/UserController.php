<?php

namespace App\Http\Controllers\API;

use App\Notifications\SignupActivate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response as ResponseCode;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{

    /**
     * login with with Laravel Passport
     * @param Request $request
     * @return \Illuminate\Http\Response
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
            return response()->json(['error'=>$validator->errors()], ResponseCode::HTTP_BAD_REQUEST);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('Evalooni angular')-> accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], ResponseCode::HTTP_UNAUTHORIZED);
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
            return response()->json(['error' => $validator->errors(), ResponseCode::HTTP_BAD_REQUEST]);
        }

        $credentials = $request->only('email', 'password');
        // $credentials['active'] = 1;
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid credentials'], ResponseCode::HTTP_FORBIDDEN);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could not create token'], ResponseCode::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response()->json(compact('token'), ResponseCode::HTTP_OK);
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
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        try {

            // default image
            if ($input['sex'] == 0) {
                $input['image'] = 'https://evalooni.de/assets/images/girl2.jpg';
            } else {
                $input['image'] = 'https://evalooni.de/assets/images/guy2.jpg';
            }

            // setting activation token
            $input['activation_token'] = str_random(60);

            // save user
            $user = User::create($input);

            // sending notification
            $user->notify(new SignupActivate($user));

            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e) {
            return response()->json(['error' => 'could not get user from token'], ResponseCode::HTTP_INTERNAL_SERVER_ERROR);
        }

        return response()->json(compact('token'), ResponseCode::HTTP_OK);
    }

    /**
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function activate($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'This activation token is invalid.'
            ], ResponseCode::HTTP_NOT_FOUND);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
        $token = JWTAuth::fromUser($user);
        return redirect('/');
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
            return response()->json($user, ResponseCode::HTTP_OK);
        } catch (UnauthorizedHttpException $exception) {
            return response()->json(['error' => 'user not found'], ResponseCode::HTTP_NOT_FOUND);
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
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
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
     * @return \Illuminate\Http\Response
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
            return response()->json($validator->errors(), ResponseCode::HTTP_BAD_REQUEST);
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = str_slug($user->name, '_').'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/assets/images/profile-pictures');
            $imagePath = $destinationPath. "/".  $name;
            $image->move($destinationPath, $name);

            $user->image = 'https://evalooni.de/assets/images/profile-pictures/' . $name;
            $user->save();

            return response()->json(['message' => 'user image was successfully saved'], ResponseCode::HTTP_ACCEPTED);
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

        return response()->json(['message' => 'user was successfully deleted'], ResponseCode::HTTP_NO_CONTENT);
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
        return response()->json(['message' => $message, 'user' => $user], ResponseCode::HTTP_CREATED);
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
        return response()->json(['message' => $message, 'user' => $user], ResponseCode::HTTP_NO_CONTENT);
    }
}
