<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {

    $image = 'https://picsum.photos/id/' . $faker->numberBetween(1, 1000) . '/700';

    return [
        'title' => $faker->words(5, true),
        'description' => $faker->text(500),
        'text' => $faker->text(4000),
        'image' => $image,
        'author_id' => $faker->randomElement(\App\User::all('id')),
        'software_id' => $faker->randomElement(\App\Software::all('id')),
        'type_id' => $faker->randomElement(\App\PostType::all('id')),
        'like_dislike' => $faker->numberBetween(500, 1000) . '|' . $faker->numberBetween(1, 200)
    ];
});
