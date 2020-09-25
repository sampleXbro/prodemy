<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function author()
    {
        return $this->belongsTo(\App\User::class, 'author_id', 'id', 'users');
    }

    public function post()
    {
        return $this->belongsTo(\App\Post::class, 'post_id', 'id', 'posts');
    }

}
