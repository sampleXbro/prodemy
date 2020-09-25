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

$factory->define(User::class, function (Faker $faker) {

    $image = 'https://picsum.photos/id/' . $faker->numberBetween(1, 1000) . '/300';

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'avatar' => $image,
        'email_verified_at' => now(),
        'role_id' => $faker->numberBetween(2, 4),
        'users_level_id' => $faker->numberBetween(1, 5),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'remember_token' => Str::random(10),
    ];
});
