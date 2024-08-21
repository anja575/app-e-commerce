<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Events\UserSaved;
use App\Mail\HelloMail;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail
{

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(UserSaved $event)
    {
        Mail::to($event->user->email)
        ->send(new HelloMail($event->user));
    }
}
