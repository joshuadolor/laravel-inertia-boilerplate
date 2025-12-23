<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'title' => 'Dashboard',
            'description' => 'Welcome to your Laravel Inertia.js boilerplate dashboard.',
        ]);
    }
}
