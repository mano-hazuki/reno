<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLectureRequest;
use App\Http\Requests\UpdateLectureRequest;
use App\Models\Lecture;
use Inertia\Inertia;

class LectureController extends Controller {

    /**
     * Display a listing of the resource.
     */
    public function index(Lecture $lecture) {
        return Inertia::render("Home", [
            "lectures" => $lecture->getByAmount(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLectureRequest $request) {
    }

    /**
     * Display the specified resource.
     */
    public function show(int $userId, int $lectureId) {
        $lecture = new Lecture();
        $data = $lecture->getById($userId, $lectureId);
        return Inertia::render("lecture/Lecture", [
            "data" => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lecture $lecture) {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLectureRequest $request, Lecture $lecture) {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lecture $lecture) {
    }
}
