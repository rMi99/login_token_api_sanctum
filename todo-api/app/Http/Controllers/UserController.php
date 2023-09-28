<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        
        // $user = $r
        $user = $request->user();

        return response()->json([
            'name' => $user->name,
            
        ]);

        // return 'nulll';
    }
}
