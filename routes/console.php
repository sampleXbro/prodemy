<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');

Artisan::command('logs:clear', function() {

    exec('echo "" > ' . storage_path('logs/laravel.log'));

    exec('rm ' . storage_path('logs/*'));

    $this->comment('Logs have been cleared!');

})->describe('Clear log files');
