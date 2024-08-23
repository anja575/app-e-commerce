<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItems;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 
        'description', 
        'price',
        'image'
    ];

    /**
     * Get the order items that contain the product.
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
