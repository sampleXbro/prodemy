<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{

    protected $fillable = ['message', 'status'];

    public function user()
    {
        return $this->belongsTo(\App\User::class, 'user_id', 'id', 'users');
    }
}
