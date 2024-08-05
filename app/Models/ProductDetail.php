<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'weight',
        'ingredient_type',
        'brand',
        'form',
        'manufacturer',
        'product_dimensions',
        'generic_name',
        'product_id'
    ];
}
