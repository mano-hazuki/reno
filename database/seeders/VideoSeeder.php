<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        Video::factory()->createMany([
            [
                "user_name" => "john123",
                "title" => "John's Video",
                "description" => "John",
                "slug" => "john-video",
                "views" => 12345,
                "thumbnail_image_url" => "localhost",
                "data_url" => "localhost",
            ],
            [
                "user_name" => "michel456",
                "title" => "Michel's Video",
                "description" => "Michel",
                "slug" => "michel-video",
                "views" => 12,
                "thumbnail_image_url" => "localhost",
                "data_url" => "localhost",
            ],
            [
                "user_name" => "james_gg",
                "title" => "James's Video",
                "description" => "James",
                "slug" => "james-video",
                "views" => 365000,
                "thumbnail_image_url" => "localhost",
                "data_url" => "localhost",
            ],
            [
                "user_name" => "james_gg",
                "title" => "James's Second Video",
                "description" => "This is my second video!",
                "slug" => "john-second-video",
                "views" => 1528976,
                "thumbnail_image_url" => "localhost",
                "data_url" => "localhost",
            ],
            [
                "user_name" => "mary-uk",
                "title" => "Mary's Video",
                "description" => "Mary",
                "slug" => "mary-video",
                "views" => 1024,
                "thumbnail_image_url" => "localhost",
                "data_url" => "localhost",
            ],
            [
                "user_name" => "rob4rt",
                "title" => "Robert's Video",
                "description" => "Robert",
                "slug" => "robert-video",
                "views" => 2,
                "thumbnail_image_url" => "localhost",
                "data_url" => "localhost",
            ]
        ]);
    }
}
