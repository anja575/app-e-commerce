<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Resources\OrderResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Events\OrderCreated;
use App\Listeners\SendOrderCreatedEmail;
use App\Mail\HelloMail;
use App\Mail\OrderCreatedMail;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
        return OrderResource::collection($orders);
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
            'date_time' => 'required|date',
            'total_price' => 'required|numeric',
            'status' => 'required|string|max:255',
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json(['Validation error!', $validator->errors()]);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found!'], 404);
        }

        $order = Order::create([
            'date_time' => now(),
            'total_price' => $request->total_price,
            'status' => 'confirmed',
            'user_id' => $user->id,
        ]);

       /* Mail::to('anja.cirkovic00@gmail.com')
        ->send(new HelloMail());*/

        /*Mail::to('anja.cirkovic00@gmail.com')
        ->send(new OrderCreatedMail($order));*/
        
        //event(new OrderCreated($order));
        //OrderCreated::dispatch($order);
        //$listener = new \App\Listeners\SendOrderCreatedEmail();
        //$listener->handle(new \App\Events\OrderCreated($order));

        return response()->json(['Order has been added!', new Order($order)]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $order = Order::find($id);
        
        if ($order) {
            return new OrderResource($order);
        } else {
            return response()->json('The order with the requested ID does not exist.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $order = Order::find($id);

        if (is_null($order)) {

           return response()->json('The order you want to update does not exist!');
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['Validation error!', $validator->errors()]);
        }

        $order->status = $request->status;

        $order->save();

        return response()->json(['The order has been updated!', 'order' => new OrderResource($order)],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
