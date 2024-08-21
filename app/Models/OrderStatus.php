<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id', 
        'user_id', 
        'old_status', 
        'new_status'
    ];

    /**
     * Get the order that this status change belongs to.
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the user (admin) who made this status change.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
