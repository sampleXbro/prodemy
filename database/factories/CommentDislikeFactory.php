<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(\App\CommentDislike::class, function (Faker $faker) {

    return [
        'user_id' => $faker->randomElement(User::all('id')),
        'comment_id' => $faker->randomElement(\App\Comment::all('id')),

    ];
});
