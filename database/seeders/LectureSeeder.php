<?php

namespace Database\Seeders;

use App\Models\Lecture;
use Illuminate\Database\Seeder;

class LectureSeeder extends Seeder {

    /**
     * Run the database seeds.
     */
    public function run(): void {
        Lecture::factory()->createMany([
            [
                "user_id" => 1,
                "title" => "John's Video",
                "description" => "John",
                "view_count" => 0,
                "thumbnail_image_url" => "localhost",
                "data_file_url" => "localhost",
            ],
            [
                "user_id" => 2,
                "title" => "Michel's Video",
                "description" => "Michel",
                "view_count" => 0,
                "thumbnail_image_url" => "localhost",
                "data_file_url" => "localhost",
            ],
            [
                "user_id" => 3,
                "title" => "James's Video",
                "description" => "James",
                "view_count" => 0,
                "thumbnail_image_url" => "localhost",
                "data_file_url" => "localhost",
            ],
            [
                "user_id" => 4,
                "title" => "Mary's Video",
                "description" => "Mary",
                "view_count" => 0,
                "thumbnail_image_url" => "localhost",
                "data_file_url" => "localhost",
            ],
            [
                "user_id" => 5,
                "title" => "Robert's Video",
                "description" => "Robert",
                "view_count" => 0,
                "thumbnail_image_url" => "localhost",
                "data_file_url" => "localhost",
            ]
        ]);
    }
}
