<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    public function reviews()
    {
        return $this->hasMany(\App\Review::class);
    }

    public function author()
    {
        return $this->belongsTo(\App\User::class, 'author_id', 'id', 'users');
    }

    public function level()
    {
        return $this->belongsTo(\App\Level::class, 'level_id', 'id', 'levels');
    }

    public function software()
    {
        return $this->belongsTo(\App\Software::class, 'software_id', 'id', 'software');
    }
}
