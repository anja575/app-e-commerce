<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'),
            'admin' => true,
        ]);

        User::create([
            'name' => 'Jovan Jovanovic',
            'email' => 'jovan@example.com',
            'password' => Hash::make('jovan123'),
            'admin' => false,
        ]);

        User::create([
            'name' => 'Petar Petrovic',
            'email' => 'petar@example.com',
            'password' => Hash::make('petar123'),
            'admin' => false,
        ]);
    }
}
