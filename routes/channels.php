<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat', function ($user) {
    return Auth::check();
});

Broadcast::channel('myMessages', function ($user) {
    return Auth::check();
});
