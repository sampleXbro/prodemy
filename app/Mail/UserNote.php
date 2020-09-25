<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserNote extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $courseTitle;
    protected $note;

    public function __construct($courseTitle, $note)
    {
        $this->courseTitle = $courseTitle;
        $this->note = $note;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->view('mails.note')
            ->with([
            'courseTitle' => $this->courseTitle,
            'note' => $this->note,
        ]);
    }
}
