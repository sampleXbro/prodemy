<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'PRODEMY') }}</title>

    <!-- Scripts -->
    <script src='public/js/app.js' defer></script>
    <script src="https://kit.fontawesome.com/991dceb5d5.js" crossorigin="anonymous"></script>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href='public/css/app.css' rel="stylesheet">


</head>
<body>
    <div id="app">
        <main class="py-0">
            @yield('content')
        </main>

        <footer class="container-fluid">
            @yield('footer', 'Авторское право © ' . now()->year . ' Prodemy')
        </footer>
    </div>

</body>
</html>
