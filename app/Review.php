<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function course()
    {
        return $this->belongsTo(\App\Course::class, 'course_id', 'id', 'courses');
    }

    public function author()
    {
        return $this->belongsTo(\App\User::class, 'author_id', 'id', 'users');
    }
}
