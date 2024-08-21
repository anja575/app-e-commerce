<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;

class OrderResource extends JsonResource
{
    public static $wrap = 'order';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $user = User::find($this->resource->user_id);
        return [
            'id' => $this->resource->id,
            'user' => $user->id,
            'time'=> $this->resource->date_time,
            'price' => $this->resource->total_price,
            'status' => $this->resource->status,
        ];
    }
}
