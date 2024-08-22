<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\OrderCreated;
use App\Events\OrderStatusUpdated;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 
        'date_time', 
        'total_price',
        'status'
    ];

    /**
     * Get the user that owns the order.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the items for the order.
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Get the status changes for the order.
     */
    public function orderStatuses()
    {
        return $this->hasMany(OrderStatus::class);
    }

   /**
     * The event map for the model.
     *
     * @var array<string, string>
    */
    protected $dispatchesEvents = [
        'created' => OrderCreated::class,
        'updated' => OrderStatusUpdated::class
    ];

}
