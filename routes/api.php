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

Route::group(['middleware' => 'jwt:auth'], function(){
    // User
    Route::post('profile', 'API\UserController@profile');

    // Bookmarks
    Route::post('bookmark/{id}', 'API\UserController@addBookmark');
    Route::delete('bookmark/{id}', 'API\UserController@deleteBookmark');

    // Course review, tags and skills
    Route::post('courses/{id}/review', 'CourseController@review');
    Route::post('courses/{id}/tags', 'CourseController@attachTags');
    Route::post('courses/{id}/skills', 'CourseController@attachSkills');
});

Route::group(['middleware' => 'cors'], function(){
    Route::post('login', 'API\UserController@login');
    Route::post('login-jwt', 'API\UserController@loginjwt');
    Route::post('register', 'API\UserController@register');
    Route::resources([
        'courses' => 'CourseController',
        'professors' => 'ProfessorController',
        'universities' => 'UniversityController',
        'faculties' => 'FacultyController',
    //    'departments' => 'DepartmentController',
        'chairs' => 'ChairController',
    ]);
});

/**
 * Tags
 */
Route::get('/tags/courses', 'CoursesTagsController@index');
Route::get('/tags/courses/{courseTag}', 'CoursesTagsController@show');
Route::get('/tags/professors', 'ProfessorsTagsController@index');
Route::get('/tags/professors/{courseTag}', 'ProfessorsTagsController@show');


//Route::group(['middleware' => ['auth:api', 'role:super-admin']], function () {
//    Route::post('fau', 'Univis\FauController@fau');
//});
