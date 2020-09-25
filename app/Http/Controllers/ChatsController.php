<?php

namespace App\Http\Controllers;

use App\Events\PrivateMessageDelivered;
use App\Events\PrivateMessageRead;
use App\Events\PrivateMessageSent;
use App\Message;
use App\Events\MessageSent;
use App\PrivateMessage;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
    }

    public function index()
    {
        return view('chat');
    }


    public function fetchMessages()
    {
        return Message::with('user')->orderByDesc('created_at')->get();
    }

    public function sendMessage(Request $request)
    {
        $user = Auth::user();

        $message = $user->messages()->create([
            'message' => $request->input('message')
        ]);

        broadcast(new MessageSent($user, $message))->toOthers();

        return Message::with('user')->firstWhere('id', $message->id);
    }


    public function fetchPrivateMessages()
    {
        return PrivateMessage::with('author')->orderByDesc('created_at')->get();
    }

    public function sendPrivateMessage(Request $request)
    {
        $message = new PrivateMessage();
        $message->author_id = Auth::id();
        $message->recipient_id = $request->recipient;
        $message->message = $request->message;
        $message->save();

        broadcast(new PrivateMessageSent(Auth::user(), User::firstWhere('id', $message->recipient_id), $message))->toOthers();

        return PrivateMessage::with('author')->firstWhere('id', $message->id);
    }

    public function updatePrivateMessage(Request $request)
    {
        $message = PrivateMessage::find($request->id);

        $message->message = $request->message ?? $message->message;
        $message->status = $request->status ?? $message->status;

        $message->save();

        if($request->status &&  $request->status == 'delivered'){
            broadcast(new PrivateMessageDelivered($message))->toOthers();
        } elseif ($request->status &&  $request->status == 'read'){
            broadcast(new PrivateMessageRead($message))->toOthers();
        }

        return PrivateMessage::with('author')->firstWhere('id', $message->id);
    }
}
