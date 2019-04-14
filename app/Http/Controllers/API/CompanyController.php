<?php

namespace App\Http\Controllers\API;

use App\Models\Company;
use App\Models\Job;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseCode;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    /**
     * @OA\Get(
     *     path="/companies/{companyId}",
     *     tags={"Company"},
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

    /**
     * @OA\Get(
     *     path="/companies/{companyId}/jobs",
     *     tags={"Company"},
     *     summary="Job listings of a given company",
     *     description="Returns a listing with company jobs",
     *     operationId="getCompanyJobs",
     *     @OA\Parameter(
     *         name="companyId",
     *         in="path",
     *         description="ID of company",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(type="array",
     *           @OA\Items(ref="#/components/schemas/Job")
     *         )
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
    public function listJobs(Company $company)
    {
        $jobs = Job::where('company_id', $company->id)->get();

        return response()->json($jobs, ResponseCode::HTTP_OK);
    }
}
