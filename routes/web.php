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

Route::resources([
    'professors' => 'ProfessorController'
]);

Route::resources([
    'universities' => 'UniversityController'
]);

Route::resources([
    'chairs' => 'ChairController'
]);

Route::resources([
    'faculties' => 'FacultiesController'
]);


//parser routes
Route::post('/parser/linkedin', 'Parser\LinkedinController@index');
Route::post('/parser/link', 'Parser\LinkedinController@link');
Route::post('/parser/link/get', 'Parser\LinkedinController@getFirstLink');

Route::get('/fau', 'Univis\FauController@index');
