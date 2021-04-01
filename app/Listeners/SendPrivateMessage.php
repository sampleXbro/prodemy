<?php

namespace App\Listeners;

use App\Events\PrivateMessageSent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendPrivateMessage
{

    public function __construct()
    {
        //
    }

    public function handle(PrivateMessageSent $event)
    {
        //
    }
}
