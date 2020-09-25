<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudiedCourse extends Model
{
    public function courses()
    {
        return $this->hasMany(\App\Course::class);
    }
}
