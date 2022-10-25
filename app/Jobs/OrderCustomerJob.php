<?php

namespace App\Jobs;

use App\Mail\OrderCustomerMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;


class OrderCustomerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $custome;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($custome)
    {
        $this->custome = $custome;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new OrderCustomerMail();
        Mail::to($this->custome['to'])
        ->bcc('dmckenna@shieldssgf.com')
        ->send($email);
    }
}
