<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Professor;
use App\Chair;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $professors = Professor::with(['chair', 'courses'])->get();

        return view('professors.index', compact('professors'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $chairs = Chair::all();
        return view('professors.create', compact('chairs'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'chair' => 'required',
            'type' => 'required',
            'level' => 'required',
        ]);

        $professor = new Professor();
        $professor->name = $request->name;
        $professor->chair_id = $request->chair;
        $professor->type = $request->type;
        $professor->level = $request->level;
        $professor->save();

        return redirect()->route('professors.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  Professor  $professor
     * @return \Illuminate\Http\Response
     */
    public function show(Professor $professor)
    {
        return view('professors.show', compact('professor'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Professor  $professor
     * @return \Illuminate\Http\Response
     */
    public function edit(Professor $professor)
    {
        $chairs = Chair::all();
        return view('professors.edit', compact(['professor', 'chairs']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $professor = Professor::find($id);
        $professor->name = $request->name;
        $professor->chair_id = $request->chair;
        $professor->type = $request->type;
        $professor->level = $request->level;
        $professor->save();

        return redirect()->route('professors.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $professor = Professor::find($id);
        $professor->delete();

        return redirect()->route('professors.index');
    }
}
