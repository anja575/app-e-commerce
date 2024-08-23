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

        Product::create([
            'name' => 'Smartwatch',
            'description' => 'Smartwatch that tracks your activity and notifications.',
            'price' => 300.00,
            'image' => 'https://es.colmi.info/cdn/shop/products/SmartWatchCOLMiC80BlackLeftView_1.jpg?v=1679022092',
        ]);

        Product::create([
            'name' => 'Gaming Console',
            'description' => 'Powerful console for playing the latest video games in high resolution.',
            'price' => 400.00,
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PS2-Versions.jpg/640px-PS2-Versions.jpg'
        ]);

        Product::create([
            'name' => 'Wireless Charger',
            'description' => 'Fast wireless charger for charging your devices without cables.',
            'price' => 100.00,
            'image' => 'https://m.media-amazon.com/images/I/61+CVXTrs9L._AC_UF1000,1000_QL80_.jpg',
        ]);

        Product::create([
            'name' => 'Bluetooth Speaker',
            'description' => 'Portable speaker with high-quality sound and long battery life.',
            'price' => 150.00,
            'image' => 'https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg',
        ]);

        Product::create([
            'name' => 'VR Headset',
            'description' => 'Device that immerses you in virtual reality experiences.',
            'price' => 250.00,
            'image' => 'https://res.cloudinary.com/grover/image/upload/e_trim/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1692633028/m3qrzdoacytxwbczbcum.png',
        ]);

    }
}
