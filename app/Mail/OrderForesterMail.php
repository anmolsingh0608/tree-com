<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderForesterMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;
    protected $forest;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($forest)
    {
        $this->forest = $forest;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.forester', [
            'data' => $this->forest,
        ]);
    }
}
