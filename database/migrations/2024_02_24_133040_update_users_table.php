<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('users', function (Blueprint $table) {
            DB::statement("ALTER TABLE users MODIFY email_verified_at TIMESTAMP AFTER remember_token;");
            DB::statement("ALTER TABLE users RENAME COLUMN email_verified_at TO verified_at;");
            $table->text("image_url")->nullable()->after("remember_token");
            $table->string("bio", 200)->nullable()->after("remember_token");
            $table->timestamp("deleted_at")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("bio");
            $table->dropColumn("image_url");
            $table->dropColumn("deleted_at");
            DB::statement("ALTER TABLE users MODIFY verified_at TIMESTAMP AFTER email;");
            DB::statement("ALTER TABLE users RENAME COLUMN verified_at TO email_verified_at;");
        });
    }
};
