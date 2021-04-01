<?php

namespace App\Http\Controllers;

use App\Course;
use App\Review;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

    public function index()
    {
        $courses = Course::all()->reverse();

        $reviews = Review::all();

        return view('home.index', compact('courses', 'reviews'));
    }

}
