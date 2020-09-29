<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');

Artisan::command('logs:clear', function() {

    // Option 1. Empty the laravel.log file, OR
    exec('echo "" > ' . storage_path('logs/laravel.log'));

    // Option 2. Empty the logs folder
    exec('rm ' . storage_path('logs/*'));

    $this->comment('Logs have been cleared!');

})->describe('Clear log files');
