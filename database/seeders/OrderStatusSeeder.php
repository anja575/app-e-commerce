<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OrderStatus;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        OrderStatus::create([
            'order_id' => 1,
            'user_id' => 1,  // Admin User
            'old_status' => 'pending',
            'new_status' => 'confirmed',
        ]);

        OrderStatus::create([
            'order_id' => 2,
            'user_id' => 1,  // Admin User
            'old_status' => 'pending',
            'new_status' => 'confirmed',
        ]);
    }
}
