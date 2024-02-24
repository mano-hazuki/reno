<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->timestamp("email_verified_at")->after("remember_token")->change();
            $table->renameColumn("email_verified_at", "verified_at");
            $table->text("image_url")->nullable()->after("remember_token");
            $table->string("bio", 200)->nullable()->after("remember_token");
            $table->timestamp("deleted_at")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("bio");
            $table->dropColumn("image_url");
            $table->dropColumn("deleted_at");
            $table->timestamp("verified_at")->after("email")->change();
            $table->renameColumn("verified_at", "email_verified_at");
        });
    }
};
