<!DOCTYPE html>
<html>
<head>
    <title>WELCOME TO TECHTRONICS</title>
</head>
<body>
    <h1>WELCOME TO TECHTRONICS {{ $user->name }}</h1>
    <p>You have successfully created your account.</p>
    <p> We wish you a nice shopping in our tech store! </p>

    <p>Best regards,<br>
    The TechTronics Team</p>

    <p><img src="{{ asset('public/logo-signature.png') }}" alt="TechTronics Logo" style="width: 150px;"></p>

</body>
</html>
