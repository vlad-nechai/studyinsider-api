<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('landing');
});

/**
 * Courses routes
 */
Route::get('/courses', [
    'as' => 'courses_index',
    'uses' => 'CourseController@index'
]);
Route::get('/course/{course}', 'CourseController@show');
Route::get('/courses/create', 'CourseController@create');
Route::get('/course/{course}/edit', 'CourseController@edit');
Route::post('/courses', 'CourseController@store');

Route::get('/universities', 'UniversityController@index');
Route::get('/professors', 'ProfessorController@index');
Route::get('/chairs', 'ChairController@index');
Route::get('/majors', 'MajorController@index');
Route::get('/faculties', 'FacultiesController@index');