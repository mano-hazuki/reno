<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {

    /**
     * Run the database seeds.
     */
    public function run(): void {
        User::factory()->createMany([
            [
                "name" => "John",
                "email" => "john@example.com",
                "password" => "john",

            ],
            [
                "name" => "Michel",
                "email" => "michel@example.com",
                "password" => "michel",
            ],
            [
                "name" => "James",
                "email" => "james@example.com",
                "password" => "james",
            ],
            [
                "name" => "Mary",
                "email" => "mary@example.com",
                "password" => "mary",
            ],
            [
                "name" => "Robert",
                "email" => "robert@example.com",
                "password" => "robert",
            ]
        ]);
    }
}
