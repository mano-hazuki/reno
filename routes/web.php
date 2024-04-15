<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\VideoQueryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__ . "/auth.php";

/**
 * Only authenticated and verified users can access these URLs
 * If not, then guests (or un-verified users) will be redirected to login page
 */
Route::get("/account", function () {
    return Inertia::render("Account");
})->middleware(["auth", "verified"])->name("account");

/**
 * Only authenticated users can access these URLs
 * If not, then guests will be redirected to login page.
 */
Route::middleware("auth")->group(function () {
    Route::get("/dashboard", [DashboardController::class, "index"])->name("dashboard");
    Route::get("/settings/profile", [ProfileController::class, "edit"])->name("profile.edit");
    Route::patch("/settings/profile", [ProfileController::class, "update"])->name("profile.update");
    Route::get("/settings/account", [AccountController::class, "edit"])->name("account.edit");
    Route::delete("/settings/account", [AccountController::class, "destroy"])->name("account.destroy");

    Route::get("/videos/new", [VideoController::class, "create"])->name("videos.new");
    Route::get("/videos/{slug}/edit", [VideoController::class, "edit"])->name("videos.edit");
    Route::post("/videos/{slug}/edit", [VideoController::class, "update"]);
});

/**
 * Any viewers can access these URLs
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