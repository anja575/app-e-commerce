<!DOCTYPE html>
<html>
<head>
    <title>ORDER STATUS UPDATED</title>
</head>
<body>
    <h1>Dear {{ $order->user->name }} the status of your order has been changed.</h1>
    <p>Order number: {{ $order->id }}</p>
    <p>Order status: {{ $order->status }}</p>

    <p>Best regards,<br>
    The TechTronics Team</p>

    <p><img src="https://i.imgur.com/r0HRqxK.png" alt="TechTronics Logo" style="width: 200px;"></p>
</body>
</html>
