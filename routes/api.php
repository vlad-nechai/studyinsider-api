<?php

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

Route::group(['middleware' => 'jwt.auth'], function() {

    // -------------------------------------------------------------
    //  User profile
    // -------------------------------------------------------------
    Route::post('profile', 'API\UserController@profile');
    Route::put('profile', 'API\UserController@edit');
    Route::put('profile/edit-password', 'API\UserController@editPassword');
    Route::put('profile/edit-image', 'API\UserController@editImage');
    Route::post('profile/image', 'API\UserController@uploadImage');
    Route::delete('profile', 'API\UserController@delete');


    // -------------------------------------------------------------
    //  Bookmarks
    // -------------------------------------------------------------
    // Get all bookmarks
    Route::get('profile/bookmarks', 'API\UserController@getAllUserBookmarks');
    // User bookmarked courses for a semester
    Route::get('profile/bookmarks/{semesterId}', 'API\UserController@semesterBookmarks');
    // Bookmark a course for a semester
    Route::post('bookmarks/{course}/semester/{semester}', 'API\UserController@addBookmark');
    // Remove bookmarked course for a semester
    Route::delete('bookmarks/{course}/semester/{semester}', 'API\UserController@deleteBookmark');


    // -------------------------------------------------------------
    //  Reviews
    // -------------------------------------------------------------
    // Get all user reviews
    Route::get('profile/reviews', 'API\UserController@getAllUserReviews');
    // Review a course with tags and skills
    Route::post('courses/{id}/review/semester/{semester}', 'API\CourseController@review');
});

Route::post('login', 'API\UserController@loginJWT');
Route::post('register', 'API\UserController@registerJWT');
Route::put('profile/token', 'API\UserController@refreshJWT');

// Search
Route::get('/courses/search', 'API\CourseController@search');

// Quick search
Route::get('/courses/quick-search', 'API\CourseController@quickSearch');
Route::get('/professors/quick-search', 'API\ProfessorController@quickSearch');
Route::get('/skills/quick-search', 'API\SkillsController@quickSearch');
Route::get('/study-programs/quick-search', 'API\StudyProgramController@quickSearch');

Route::resources([
    'courses' => 'API\CourseController',
    'professors' => 'API\ProfessorController',
    'universities' => 'API\UniversityController',
    'faculties' => 'API\FacultyController',
    'chairs' => 'API\ChairController',
    'study-programs' => 'API\StudyProgramController',
]);


// Companies
Route::get('companies/{company}', 'API\CompanyController@show');
Route::get('companies/{company}/jobs', 'API\CompanyController@listJobs');


//Route::group(['middleware' => ['auth:api', 'role:super-admin']], function () {
//    Route::post('fau', 'Univis\FauController@fau');
//});
