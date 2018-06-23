<?php

namespace App\Http\Controllers;

use App\Prof;
use App\ProfessorTag;
use Illuminate\Http\Request;

class ProfessorsTagsController extends Controller
{
    //TODO: Exceptions when not found

    public function index()
    {
        $tags = ProfessorTag::withCount('professors')
            ->with('topCourses')
            ->get();

        return $tags;
    }

    /**
     * @param ProfessorTag $courseTag
     * @return ProfessorTag
     */
    public function show(ProfessorTag $courseTag) {
        return $courseTag->load(['topProfessors']);
    }
}
