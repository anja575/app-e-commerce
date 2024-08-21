<?php

namespace App\Http\Controllers;

use App\Models\OrderStatus;
use App\Http\Resources\OrderStatusResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statuses = OrderStatus::all();
        return OrderStatusResource::collection($statuses);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'order_id' => 'required|integer',
            'user_id' => 'required|integer',
            'new_status' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['Validation error!', $validator->errors()]);
        }

        $status = OrderStatus::create([
            'order_id' => $request->order_id,
            'user_id' => $request->user_id,
            'old_status' => $request->old_status ?? 'no old status',  // Default value
            'new_status' => $request->new_status,
        ]);

        return response()->json(['Order status has been added!', new OrderItem($item)]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $status = OrderStatus::find($id);
        
        if ($status) {
            return new OrderStatusResource($status);
        } else {
            return response()->json('The order status with the requested ID does not exist.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderStatus $orderStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderStatus $orderStatus)
    {
        //
    }
}
