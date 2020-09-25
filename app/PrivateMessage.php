<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrivateMessage extends Model
{
    protected $fillable = ['message', 'author_id', 'recipient_id'];

    public function author()
    {
        return $this->belongsTo(\App\User::class, 'author_id', 'id', 'users');
    }

    public function recipient()
    {
        return $this->belongsTo(\App\User::class, 'recipient_id', 'id', 'users');
    }
}
