<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LogVerifiedUser
{

    public function __construct()
    {
        //
    }

    public function handle(Verified $event)
    {
        //
    }
}
