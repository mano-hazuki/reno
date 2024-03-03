<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create("videos", function (Blueprint $table) {
            $table->string("user_name", 16);
            $table->foreign("user_name")->references("name")->on("users")->cascadeOnDelete();
            $table->string("title", 50);
            $table->string("description", 500)->nullable();
            $table->string("slug", 32);
            $table->integer("views")->default(0);
            $table->text("thumbnail_image_url")->nullable();
            $table->text("data_url");
            $table->timestamps();
            $table->timestamp("deleted_at")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists("videos");
    }
};
