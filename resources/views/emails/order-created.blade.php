<!DOCTYPE html>
<html>
<head>
    <title>Order Created</title>
</head>
<body>
    <h1>Order Created</h1>
    <p>Order ID: {{ $order->id }}</p>
    <p>Total Price: ${{ $order->total_price }}</p>
    <!-- Dodajte više detalja po potrebi -->
</body>
</html>
