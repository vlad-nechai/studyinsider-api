<?php

namespace App\Http\Controllers\Univis;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\User;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class FauController extends Controller
{

    public function index()
    {

        $user = User::find(2);

        echo $user->hasAllRoles(Role::all());


    }
}
