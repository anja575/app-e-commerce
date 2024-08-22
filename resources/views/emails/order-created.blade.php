<!DOCTYPE html>
<html>
<head>
    <title>ORDER CREATED</title>
</head>
<body>
    <h1>ORDER CREATED</h1>
    <p>Order number: {{ $order->id }}</p>
    <p>Customer name: {{ $order->user->name }}</p>
    <p>Total Price: €{{ $order->total_price }}</p>
</body>
</html>
