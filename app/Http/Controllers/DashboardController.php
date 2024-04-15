<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Video $video)
    {
        $user = Auth::user();
        $username = $user->name;
        return Inertia::render("Dashboard", [
            "videos" => $video->fetchAllByUsername($username)
        ]);
    }
}
