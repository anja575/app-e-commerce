<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\OrderCreated;
use App\Listeners\SendOrderCreatedEmail;
use App\Events\UserCreated;
use App\Listeners\SendWelcomeEmail;
use App\Events\OrderStatusUpdated;
use App\Listeners\SendOrderStatusUpdatedEmail;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        OrderCreated::class => [
            SendOrderCreatedEmail::class,
        ],
        UserCreated::class => [
            SendWelcomeEmail::class,
        ],
        OrderStatusUpdated::class => [
            SendOrderStatusUpdatedEmail::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
