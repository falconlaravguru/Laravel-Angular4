<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('cors')->prefix('angular')->group(function() {

    Route::get('players','PlayerController@GetPlayers');

    Route::get('player/{id}','PlayerController@GetPlayer');

    Route::post('player/create','PlayerController@CreatePlayer');

    Route::put('player/update/{id}','PlayerController@UpdatePlayer');

    Route::delete('player/delete/{id}','PlayerController@DeletePlayer');

    Route::post('Call/Token','TokenController@newToken');

    Route::post('Call/NewCall','CallController@newCall');

    Route::post('login','authController@login');

    Route::post('register', 'authController@register');
    
    Route::get('logout', 'authController@logout');

    Route::get('login/checkout', 'authController@checkout');

    Route::get('GoogleAuth', ['as' => 'GoogleAuthentication', 'uses' => 'GoogleSSOController@SignIn']);

    Route::get('clubs','ClubController@GetClubs');

    Route::get('club/{id}','ClubController@GetClub');

    Route::post('club/create','ClubController@CreateClub');

    Route::put('club/update/{id}','ClubController@UpdateClub');

    Route::delete('club/delete/{id}','ClubController@DeleteClub');
});