<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\VideoQueryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__."/auth.php";

/**
 * Only authenticated and verified users can access to these URLs
 * If not, then guests (or un-verified users) will be redirected to login page
 */
Route::get("/account", function () {
    return Inertia::render("Account");
})->middleware(["auth", "verified"])->name("account");

/**
 * Only authenticated users can access to these URLs
 * If not, then guests will be redirected to login page.
 */
Route::middleware("auth")->group(function () {
    Route::get("/profile", [ProfileController::class, "edit"])->name("profile.edit");
    Route::patch("/profile", [ProfileController::class, "update"])->name("profile.update");
    Route::delete("/profile", [ProfileController::class, "destroy"])->name("profile.destroy");
//    Route::get("/dashboard", [])->name("dashboard");
});

/**
 * Any viewers can access to these URLs
 */
Route::get("/", [VideoController::class, "index"])->name("home");
Route::get("/search", [VideoQueryController::class, "index"])->name("search");
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