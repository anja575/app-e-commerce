<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Order;
use App\Models\Product;

class OrderItemResource extends JsonResource
{
    public static $wrap = 'item';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $order = Order::find($this->resource->order_id);
        $product = Product::find($this->resource->product_id);
        return [
            'id' => $this->resource->id,
            'order' => $order->id,
            'product' => $product->id,
            'quantity'=> $this->resource->quantity,
            'price' => $this->resource->price,
        ];
    }
}
