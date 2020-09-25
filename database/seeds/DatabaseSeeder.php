<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //------ $this->call(UserSeeder::class);
        //factory(\App\User::class, 10)->create();
        //factory(\App\Course::class, 25)->create();
        //factory(\App\Review::class, 50)->create();
        factory(\App\Post::class, 200)->create();
        factory(\App\Comment::class, 500)->create();
        factory(\App\PostLike::class, 10000)->create();
        factory(\App\PostDislike::class, 2000)->create();
        //factory(\App\CommentLike::class, 1000)->create();
        //factory(\App\CommentDislike::class, 150)->create();
    }
}
