const mix = require('laravel-mix');


mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.sass', 'public/css')
    .options({
        processCssUrls: false,

    })
    .setResourceRoot("/");


