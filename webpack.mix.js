const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.sass('src', 'output', { implementation: require('node-sass') });

mix.react('resources/js/app.js', 'public/js')
    //.sass('resources/sass/app.sass', 'dest', { implementation: require('node-sass') })
    .sass('resources/sass/app.sass', 'public/css')
    .options({
        processCssUrls: false
    })
    .setResourceRoot("/");


