<?php

namespace App\Events;

use App\Message;
use App\PrivateMessage;
use App\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PrivateMessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $author;
    public $recipient;
    public $message;

    public function __construct(User $author, User $recipient, PrivateMessage $message)
    {
        $this->author = $author;
        $this->recipient = $recipient;
        $this->message = $message;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('myMessages');
    }
}
