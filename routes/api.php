<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', 'API\UserController@details');
});

Route::group(['middleware' => 'cors'], function(){
Route::resources([
    'courses' => 'CourseController',
    'professors' => 'ProfessorController',
    'universities' => 'UniversityController',
    'faculties' => 'FacultyController',
//    'departments' => 'DepartmentController',
    'chairs' => 'ChairController',

]);
});

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('courses/{id}/review', 'CourseController@review');
    Route::post('courses/{id}/tags', 'CourseController@attachTags');
    Route::post('courses/{id}/skills', 'CourseController@attachSkills');
});


/**
 * Tags
 */
Route::get('/tags/courses', 'CoursesTagsController@index');
Route::get('/tags/courses/{courseTag}', 'CoursesTagsController@show');
Route::get('/tags/professors', 'ProfessorsTagsController@index');
Route::get('/tags/professors/{courseTag}', 'ProfessorsTagsController@show');
