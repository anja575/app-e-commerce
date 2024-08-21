<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OrderItem;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        OrderItem::create([
            'order_id' => 1,
            'product_id' => 1,  // Laptop
            'quantity' => 1,
            'price' => 1200.00,
        ]);

        OrderItem::create([
            'order_id' => 1,
            'product_id' => 3,  // Headphones
            'quantity' => 1,
            'price' => 200.00,
        ]);

        OrderItem::create([
            'order_id' => 2,
            'product_id' => 2,  // Smartphone
            'quantity' => 1,
            'price' => 800.00,
        ]);
    }
}
