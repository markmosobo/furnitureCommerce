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
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('price')->nullable();
            $table->string('code')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('status')->nullable();
            $table->longText('description')->nullable();
            $table->string('image')->nullable();
            $table->string('size')->nullable();
            $table->integer('seller_id')->unsigned();
            $table->foreign('seller_id')
            ->references('id')
            ->on('users');
            $table->integer('category_id')->unsigned();
            $table->foreign('category_id')
            ->references('id')
            ->on('categories');
            $table->integer('store_id')->unsigned();
            $table->foreign('store_id')
            ->references('id')
            ->on('stores');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
