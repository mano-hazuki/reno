<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::table('lectures', function (Blueprint $table) {
            $table->string("description", 500)->nullable()->change();
            $table->integer("view_count")->default(0)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::table('lectures', function (Blueprint $table) {
            $table->string("description", 500)->nullable(false)->change();
            $table->integer("view_count")->change();
        });
    }
};