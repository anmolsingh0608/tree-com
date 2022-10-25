<?php

namespace App\Jobs;

use App\Mail\OrderForesterMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;


class OrderForesterJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $forest;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($forest)
    {
        $this->forest = $forest;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new OrderForesterMail($this->forest);
        Mail::to($this->forest['to'])->send($email);
    }
}
