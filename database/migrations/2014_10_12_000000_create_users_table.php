<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create("users", function (Blueprint $table) {
            $table->string("name", 16)->unique()->primary();
            $table->string("display_name", 16);
            $table->string("email")->unique();
            $table->string("password");
            $table->rememberToken();
            $table->string("bio", 200)->nullable();
            $table->string("image_url")->nullable();
            $table->timestamps();
            $table->timestamp("verified_at")->nullable();
            $table->timestamp("deleted_at")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists("users");
    }
};
