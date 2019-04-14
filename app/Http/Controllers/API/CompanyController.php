<?php

namespace App\Http\Controllers\API;

use App\Models\Company;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseCode;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    /**
     * @OA\Get(
     *     path="/companies/{companyId}",
     *     tags={"Companies"},
     *     summary="Find company by ID",
     *     description="Returns a single company object",
     *     operationId="getCompany",
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID of company to return",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/Company")
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid ID supplier"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Company not found"
     *     )
     * )
     *
     *
     * @param  Company  $company
     * @return Response
     */
    public function show(Company $company)
    {
        $company->load(['images', 'businessAreas', 'jobs']);

        return response()->json($company, ResponseCode::HTTP_OK);
    }
}