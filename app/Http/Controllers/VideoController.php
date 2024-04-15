<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Video;
use Auth;
use Inertia\Inertia;
use Inertia\Response;

class VideoController extends Controller
{
    public function index(Video $video)
    {
        return Inertia::render("Home", [
            "videos" => $video->fetchByAmount(10, "desc"),
        ]);
    }

    public function create()
    {
        return Inertia::render("Video/Editor");
    }

    public function store(StoreVideoRequest $request)
    {
    }

    public function show(string $username, string $slug): Response
    {
        $video = new Video();
        return Inertia::render("Video/WatchVideo", [
            "video" => $video->fetch($username, $slug),
        ]);
    }

    public function edit(string $slug)
    {
        $video = new Video();
        $username = Auth::user();
        return Inertia::render("Video/Editor", [
            "video" => $video->fetch($username, $slug)
        ]);
    }

    public function update(UpdateVideoRequest $request, Video $video)
    {
    }

    public function destroy(Video $video)
    {
    }
}
