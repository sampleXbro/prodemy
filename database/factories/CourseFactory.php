<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Course;
use Faker\Generator as Faker;


$factory->define(Course::class, function (Faker $faker) {

    $image = 'https://picsum.photos/id/' . $faker->numberBetween(1, 1000) . '/700';

    return [
        'title' => $faker->words(5, true),
        'description' => $faker->words(50, true),
        'image' => $image,
        'lessons_qty' => $faker->numberBetween(11, 58),
        'full_duration' => $faker->numberBetween(7000, 10000),
        'what_will_learn' => $faker->text(500),
        'requirements' => $faker->text(150),
        'is_recommended' => $faker->boolean(),
        'level_id' => $faker->numberBetween(1, 2),
        'software_id' => $faker->numberBetween(1, 5),
        'views' => $faker->numberBetween(123, 12000),
        'bonus' => $faker->boolean(),
        'author_id' => factory(App\User::class)->create()->id,
    ];
});
