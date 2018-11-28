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
    View::addExtension('html', 'php');
    return View::make('index');
});

//parser routes
//Route::post('/parser/linkedin', 'Parser\LinkedinController@index');
//Route::post('/parser/link', 'Parser\LinkedinController@link');
//Route::post('/parser/link/get', 'Parser\LinkedinController@getFirstLink');


Route::get('auth/callback/{provider}', 'SocialAuthController@callback');
Route::get('auth/redirect/{provider}', 'SocialAuthController@redirect');

