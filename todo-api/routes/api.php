<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
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
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);  
Route::post('/user', [UserController::class,'getUser']);


// Route::middleware('auth:sanctum')->get('/task', function () {
//     return response()->json(['message' => 'Welcome to the dashboard']);
// });

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::middleware(['auth'])->group(function () {
    Route::get('/task', [TaskController::class,'index'])->name('index');
});

Route::get('user', [UserController::class,'getUser'])->name('user');
Route::post('/task',[TaskController::class,'index']);

