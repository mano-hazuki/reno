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
            $table->string("name", 32)->unique()->after("id")->change();
            $table->string("display_name", 32)->after("name");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->string("name")->after("id")->change();
            if (Schema::hasColumn("users", "display_name")) {
                $table->dropColumn("display_name");
            }
        });
    }
};
