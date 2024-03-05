<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\VideoQueryController;
use Illuminate\Support\Facades\Route;

Route::get("/", [VideoController::class, "index"]);
Route::get("/search", [VideoQueryController::class, "index"]);
Route::get("/{username}", [UserController::class, "show"]);
Route::get("/{username}/videos/{slug}", [VideoController::class, "show"]);

//Route::get("/", function () {
//    return Inertia::render("Welcome", [
//        "canLogin" => Route::has("login"),
//        "canRegister" => Route::has("register"),
//        "laravelVersion" => Application::VERSION,
//        "phpVersion" => PHP_VERSION,
//    ]);
//});

//Route::get("/dashboard", function () {
//    return Inertia::render("Dashboard");
//})->middleware(["auth", "verified"])->name("dashboard");
//
//Route::middleware("auth")->group(function () {
//    Route::get("/profile", [ProfileController::class, "edit"])->name("profile.edit");
//    Route::patch("/profile", [ProfileController::class, "update"])->name("profile.update");
//    Route::delete("/profile", [ProfileController::class, "destroy"])->name("profile.destroy");
//});

require __DIR__."/auth.php";
