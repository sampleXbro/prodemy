<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'author_id' => $faker->randomElement(\App\User::all('id')),
        'post_id' => $faker->randomElement(\App\Post::all('id')),
        'like_dislike' => $faker->numberBetween(500, 1000) . '|' . $faker->numberBetween(1, 200),
        'comment' => $faker->text(1000)
    ];
});
