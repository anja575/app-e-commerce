<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Events\OrderStatusUpdated;
use App\Mail\StatusUpdatedEmail;
use Illuminate\Support\Facades\Mail;

class SendOrderStatusUpdatedEmail
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
     * @param  object  $event
     * @return void
     */
    public function handle(OrderStatusUpdated $event)
    {
        Mail::to($event->order->user->email)
        ->send(new StatusUpdatedEmail($event->order));
    }
}
