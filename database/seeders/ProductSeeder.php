<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Product::create([
            'name' => 'Laptop',
            'description' => 'High-performance laptop for professionals.',
            'price' => 1200.00,
            'image' => 'https://m.media-amazon.com/images/I/71AY2Pd3MHL.jpg',
        ]);

        Product::create([
            'name' => 'Smartphone',
            'description' => 'Latest model smartphone with amazing features.',
            'price' => 800.00,
            'image' => 'https://images-cdn.ubuy.co.in/634d031dba8fe623b47893cc-smart-phone-android-8-1-smartphone-hd.jpg',
        ]);

        Product::create([
            'name' => 'Headphones',
            'description' => 'Noise-cancelling over-ear headphones.',
            'price' => 200.00,
            'image' => 'https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp',
        ]);
    }
}
