<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FilterController;
use App\Http\Controllers\TreeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'auth:sanctum'], function(){
 
    Route::post("auth/logout",[UserController::class,'logout']);
    
    
});
Route::post("auth/login",[UserController::class,'login']);

Route::get('orders/export/', [OrderController::class, 'export']);
// Route::get('trees/export/', [TreeController::class, 'export']);

Route::resource('trees', TreeController::class);
Route::resource('users', UserController::class);
Route::resource('images', ImageController::class);
Route::resource('orders', OrderController::class);
Route::resource('customers', CustomerController::class);
Route::resource('filters', FilterController::class);
Route::resource('city', CityController::class);






