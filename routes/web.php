<?php

use Illuminate\Support\Facades\Route;

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
    return File::get(public_path() . '/index.html');
});

Route::get('uploads/tree/{filename}', function ($filename)
{
    $file = \Illuminate\Support\Facades\Storage::get('uploads/tree'.$filename);
    return response($file, 200)->header('Content-Type', 'image/jpeg');
});
