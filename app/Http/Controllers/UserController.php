<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{

    public function show(string $username)
    {
        $user = new User();
        return Inertia::render("UserDetails", [
            "user" => $user->fetch($username),
        ]);
    }
}
