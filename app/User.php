<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    public function level()
    {
        return $this->belongsTo(\App\UsersLevel::class);
    }

    public function role()
    {
        return $this->belongsTo(\App\Role::class);
    }

    public function studiedCourses()
    {
        return $this->hasMany(\App\StudiedCourse::class );
    }

    public function messages()
    {
        return $this->hasMany(\App\Message::class );
    }

    public function privateMessages()
    {
        return $this->hasMany(\App\PrivateMessage::class );
    }

    protected $fillable = [
        'name', 'email', 'password', 'avatar', 'role_id', 'users_level_id', 'additional',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

}
