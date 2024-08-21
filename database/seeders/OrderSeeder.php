<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Order::create([
            'user_id' => 2,
            'date_time' => now(),
            'total_price' => 1400.00,
            'status' => 'confirmed'
        ]);

        Order::create([
            'user_id' => 3,
            'date_time' => now(),
            'total_price' => 800.00,
            'status' => 'confirmed'
        ]);
    }
}
