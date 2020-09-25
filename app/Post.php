<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function author()
    {
        return $this->belongsTo(\App\User::class, 'author_id', 'id', 'users');
    }

    public function software()
    {
        return $this->belongsTo(\App\Software::class, 'software_id', 'id', 'software');
    }

    public function type()
    {
        return $this->belongsTo(\App\PostType::class, 'type_id', 'id', 'posts_types');
    }

    public function comments()
    {
        return $this->hasMany(\App\Comment::class);
    }

    public function likes()
    {
        return $this->hasMany(\App\PostLike::class);
    }

    public function dislikes()
    {
        return $this->hasMany(\App\PostDislike::class);
    }

}
