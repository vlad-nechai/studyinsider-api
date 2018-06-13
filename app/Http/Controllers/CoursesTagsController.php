<?php

namespace App\Http\Controllers;

use App\CourseTag;
use Illuminate\Http\Request;

class CoursesTagsController extends Controller
{

    public function index()
    {
        $tags = CourseTag::withCount('courses')
            ->get();

        return $tags;
    }
}
