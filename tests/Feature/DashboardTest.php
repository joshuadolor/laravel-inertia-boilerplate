<?php

namespace Tests\Feature;

use Tests\TestCase;

class DashboardTest extends TestCase
{
    public function test_dashboard_controller_exists(): void
    {
        $this->assertTrue(class_exists(\App\Http\Controllers\DashboardController::class));
    }

    public function test_dashboard_route_is_defined(): void
    {
        $this->assertTrue(\Illuminate\Support\Facades\Route::has('dashboard'));
    }
}
