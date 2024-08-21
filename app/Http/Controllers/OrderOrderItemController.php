<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderOrderItemController extends Controller
{
    public function index($order_id)
    {
        $items = OrderItem::get()->where('order_id', $order_id);
        if (is_null($items))
            return response()->json('Data not found', 404);
        return response()->json($items);
    }
}