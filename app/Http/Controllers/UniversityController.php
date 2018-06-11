<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\University;

class UniversityController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        $universities = University::with(['faculties'])->paginate(10);

        return $universities;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('universities.create');
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
            'type' => 'required',
            'location' => 'required',
        ]);

        $university = new University();
        $university->name = $request->name;
        $university->type = $request->type;
        $university->location = $request->location;
        $university->save();

        return redirect()->route('universities.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  University  $university
     * @return \Illuminate\Http\Response
     */
    public function show(University $university)
    {
        return view('universities.show', compact('university'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  University  $university
     * @return \Illuminate\Http\Response
     */
    public function edit(University  $university)
    {
        return view('universities.edit', compact('university'));
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
        $university = University::find($id);
        $university->name = $request->name;
        $university->type = $request->type;
        $university->location = $request->location;
        $university->save();

        return redirect()->route('universities.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $univesity = University::find($id);
        $univesity->delete();

        return redirect()->route('universities.index');
    }
}