<?php

use App\Http\Controllers\LectureController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", [LectureController::class, "index"])->name("home");

Route::get("/search", function () {
    return Inertia::render("search/Search");
})->name("search");
Route::get("/{username}", [UserController::class, "show"]);
//Route::post("/search", [LectureController::class, "show"]);
Route::get("/{user}/lectures")->name("user.lectures");
Route::get("{userId}/lectures/{lectureId}", [LectureController::class, "show"]);

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
//
//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

require __DIR__ . '/auth.php';
