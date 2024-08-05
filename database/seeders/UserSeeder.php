<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'first_name' => 'Test 1',
            'last_name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        User::factory()->create([
            'first_name' => 'Test 2',
            'last_name' => 'User 2',
            'email' => 'test2@example.com',
        ]);

        User::factory()->create([
           'first_name' => 'Test 3',
           'last_name' => 'User 3',
           'email' => 'test3@example.com',
        ]);
    }
}
