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
                "name" => "john123",
                "display_name" => "John",
                "email" => "john@example.com",
                "password" => "john",

            ],
            [
                "name" => "michel456",
                "display_name" => "Michel",
                "email" => "michel@example.com",
                "password" => "michel",
            ],
            [
                "name" => "james_gg",
                "display_name" => "James",
                "email" => "james@example.com",
                "password" => "james",
            ],
            [
                "name" => "mary-uk",
                "display_name" => "Mary",
                "email" => "mary@example.com",
                "password" => "mary",
            ],
            [
                "name" => "rob4rt",
                "display_name" => "Robert",
                "email" => "robert@example.com",
                "password" => "robert",
            ]
        ]);
    }
}
