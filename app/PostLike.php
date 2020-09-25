<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostLike extends Model
{
    public function post()
    {
        return $this->belongsTo(\App\Post::class);
    }
}
