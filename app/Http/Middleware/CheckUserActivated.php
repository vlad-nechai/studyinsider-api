<?php

namespace App\Http\Middleware;

use Closure;

use Symfony\Component\HttpFoundation\Response as ResponseCode;

class CheckUserActivated
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

        if (!$request->user()->active) {
            return response()->json(['error' => 'user email not validated'], ResponseCode::HTTP_FORBIDDEN);
        }

        return $next($request);
    }
}
