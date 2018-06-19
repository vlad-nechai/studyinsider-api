<?php

namespace App\Http\Controllers\Parser;

use App\Skill;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LinkedinController extends Controller
{

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {

        $skill = new Skill;
        $skill->name = $request->input("name");
        $skill->language = "de";
        $skill->origin = "linkedin";
        $skill->save();

        return response()->json(['success'=>'Got Simple Ajax Request.']);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function link(Request $request) {
        \DB::table('links')->insert([
            'link' => $request->input("link")
        ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFirstLink(Request $request) {
        $link = \DB::table('links')->first();

        \DB::table('links')->where('id', '=', $link->id)->delete();

        return response()->json(['success'=> $link->link]);
    }
}
