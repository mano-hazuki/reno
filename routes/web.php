<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\VideoQueryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", [VideoController::class, "index"])->name("home");
Route::get("/search", [VideoQueryController::class, "index"])->name("search");
Route::get("/account", function () {
    return Inertia::render("Account");
})->middleware(["auth", "verified"])->name("account");
Route::middleware("auth")->group(function () {
    Route::get("/profile", [ProfileController::class, "edit"])->name("profile.edit");
    Route::patch("/profile", [ProfileController::class, "update"])->name("profile.update");
    Route::delete("/profile", [ProfileController::class, "destroy"])->name("profile.destroy");
});

// FIXME: Temporary disabled these routes because of login route conflicts to these
//Route::get("/{username}", [UserController::class, "show"]);
//Route::get("/{username}/videos/{slug}", [VideoController::class, "show"]);


//Route::get("/", function () {
//    return Inertia::render("Welcome", [
//        "canLogin" => Route::has("login"),
//        "canRegister" => Route::has("register"),
//        "laravelVersion" => Application::VERSION,
//        "phpVersion" => PHP_VERSION,
//    ]);
//});

require __DIR__."/auth.php";