<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VideoQueryController extends Controller {

    public function index(Request $request): Response {
        $video = new Video();
        $query = $request->query("q", "");
        if (!empty($query)) {
            $videos = $video->fetchByQuery($query, 10, "desc");
        } else {
            $videos = null;
        }
        return Inertia::render("Search", [
            "videos" => $videos
        ]);
    }
}
