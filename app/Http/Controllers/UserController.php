<?php

namespace App\Http\Controllers;

use App\Models\Lecture;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller {

    public function show(string $username) {
        $user = new User();
        $lectures = new Lecture();
        return Inertia::render("UserDetails", [
            "user" => $user->getByName($username),
            "lectures" => $lectures->fetchByUserId($user->getByName($username)->id)
        ]);
    }
}
