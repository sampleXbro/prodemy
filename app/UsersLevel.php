<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersLevel extends Model
{
    public function users()
    {
        return $this->hasMany(\App\User::class);
    }
}
