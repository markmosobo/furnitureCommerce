<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_details', function (Blueprint $table) {
            $table->increments('id');
            $table->float('weight')->nullable();
            $table->string('ingredient_type')->nullable();
            $table->string('brand')->nullable();
            $table->string('form')->nullable();
            $table->string('manufacturer')->nullable();
            $table->string('product_dimensions')->nullable();
            $table->string('generic_name')->nullable();
            $table->integer('product_id')->unsigned();
            $table->foreign('product_id')
            ->references('id')
            ->on('products');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_details');
    }
};
