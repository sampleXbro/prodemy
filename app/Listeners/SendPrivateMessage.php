<?php

namespace App\Listeners;

use App\Events\PrivateMessageSent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendPrivateMessage
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  PrivateMessageSent  $event
     * @return void
     */
    public function handle(PrivateMessageSent $event)
    {
        //
    }
}
