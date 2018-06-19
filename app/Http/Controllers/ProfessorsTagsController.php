<?php

namespace App\Http\Controllers;

use App\Prof;
use App\ProfessorTag;
use Illuminate\Http\Request;

class ProfessorsTagsController extends Controller
{

    public function index()
    {
        $tags = ProfessorTag::withCount('professors')
            ->with('topCourses')
            ->get();

        return $tags;
    }
}
