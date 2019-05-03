<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

//            header('Access-Control-Allow-Origin: http://localhost:4200');
//            header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//            header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, x-csrf-token');
//            return $next($request);

        return $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->header('Access-Control-Allow-Credentials', 'true')
            ->header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT')
            ->header('Access-Control-Max-Age', '3600')
            ->header('Access-Control-Allow-Headers', 'Origin, Accept, Authorization, Content-Type, X-Requested-With');
    }
}
