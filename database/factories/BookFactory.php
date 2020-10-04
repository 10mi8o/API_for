<?php
use App\Models\Book;
use Faker\Generator as Faker;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

$factory->define(Book::class, function (Faker $faker) {
  return [
    'title' => $faker->realText(20, 1)
  ];
});
