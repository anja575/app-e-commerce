<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Order;
use App\Models\User;

class OrderStatusResource extends JsonResource
{
    public static $wrap = 'status';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $order = Order::find($this->resource->order_id);
        $user = User::find($this->resource->user_id);
        return [
            'id' => $this->resource->id,
            'order' => $order->id,
            'user' => $user->id,
            'old_status'=> $this->resource->old_status,
            'new_status' => $this->resource->new_status,
        ];
    }
}
