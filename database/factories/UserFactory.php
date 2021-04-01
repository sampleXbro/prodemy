<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(User::class, function (Faker $faker) {

    $image = 'https://picsum.photos/id/' . $faker->numberBetween(1, 1000) . '/300';

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'avatar' => $image,
        'email_verified_at' => now(),
        'role_id' => $faker->numberBetween(1, 2),
        'users_level_id' => $faker->numberBetween(1, 2),
        'additional' => $faker->text(140),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'remember_token' => Str::random(10),
    ];
});
