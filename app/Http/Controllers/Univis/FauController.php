<?php

namespace App\Http\Controllers\Univis;

use App\Faculty;
use App\Course;
use App\Professor;
use App\User;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class FauController extends Controller
{

    public function index()
    {

        $user = new User;
        $user->name = "blad Vs";
        $user->email = "sgsgh@gmail.com";
    }
}
