<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;

class ListController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::all();
        $users = User::all();
        $response = [
            'products' => $products,
            'users' => $users
        ];
        return response($response, 200);
    }
    }
}
