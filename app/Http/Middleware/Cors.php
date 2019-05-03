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
        //TODO: allow only for localhost server ???

            header('Access-Control-Allow-Origin: http:localhost:4200');
            header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, x-csrf-token');
            return $next($request);
    }
}
