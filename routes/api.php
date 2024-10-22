<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', fn(Request $request) => $request->user())->middleware('auth:sanctum');
Route::get('/userinfo', fn(Request $request) => $request->user())
    ->middleware(['api', 'auth'])->name('openid.userinfo');
