<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(\App\PostLike::class, function (Faker $faker) {

    return [
        'user_id' => $faker->randomElement(User::all('id')),
        'post_id' => $faker->randomElement(\App\Post::all('id')),

    ];
});
