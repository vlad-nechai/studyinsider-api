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
Route::resources([
    'courses' => 'CourseController'
]);

Route::resources([
    'professors' => 'ProfessorController'
]);

Route::resources([
    'universities' => 'UniversityController'
]);

Route::resources([
    'chairs' => 'ChairController'
]);

//Route::get('/chairs', 'ChairController@index');
Route::get('/majors', 'MajorController@index');
Route::get('/faculties', 'FacultiesController@index');

Route::get('/fau', 'Univis\FauController@index');

