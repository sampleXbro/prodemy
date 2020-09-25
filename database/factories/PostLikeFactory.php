<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\PostLike::class, function (Faker $faker) {

    return [
        'user_id' => $faker->randomElement(User::all('id')),
        'post_id' => $faker->randomElement(\App\Post::all('id')),

    ];
});
