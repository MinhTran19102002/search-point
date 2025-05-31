<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointController;

Route::get('/diem-thi/{sbd}', [PointController::class, 'findBySbd']);

Route::get('/', [PointController::class, 'test']);


Route::post('/thong-ke', [PointController::class, 'getScoreStatistics']);

Route::post('/top10', [PointController::class, 'getScoreTop10']);
