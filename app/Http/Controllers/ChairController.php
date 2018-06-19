<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Chair;
use Illuminate\Support\Facades\Validator;

class ChairController extends Controller
{

    //TODO: fix chair-faculty relation
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        $chairs = Chair::with(['courses', 'professors', 'department'])->paginate(10);

        return $chairs;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'location' => 'required',
            'department_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $chair = Chair::create($input);

        return $chair;
    }

    /**
     * Display the specified resource.
     *
     * @param Chair $chair
     * @return Chair
     */
    public function show(Chair $chair)
    {
        return $chair->load(['courses', 'professors', 'department']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $chair = Chair::find($id);
        $chair->update($input);

        return $chair;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $chair = Chair::find($id);
        $chair->delete();

        return response()->json(['success'=>'deleted'], 200);
    }
}
