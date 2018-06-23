<?php

namespace App\Http\Controllers;

use App\CourseTag;
use Illuminate\Http\Request;

class CoursesTagsController extends Controller
{
    //TODO: Exceptions when not found

    public function index()
    {
        $tags = CourseTag::withCount('courses')
            ->get();

        return $tags;
    }

    /**
     * @param CourseTag $courseTag
     * @return CourseTag
     */
    public function show(CourseTag $courseTag) {
        return $courseTag->load(['topCourses']);
    }
}
