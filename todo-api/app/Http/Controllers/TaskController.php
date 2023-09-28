<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
{
    // $user = Auth::user();
    // return response()->json([
    //     'user_id' => $user->id,
    //     'name' => $user->name,
    // ]);
    return 'null';
}
}
