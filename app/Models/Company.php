<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @OA\Schema(
 *     description="Company model",
 *     title="Company",
 *     required={"name", "website", "logo", "description", "location"},
 * )
 */
class Company extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companies';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'linkedin',
        'xing',
        'website',
        'facebook',
        'logo',
        'description',
        'location'
    ];

    /**
     * Hidden properties
     *
     * @var array
     */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    /**
     * @OA\Property(
     *     title="id",
     * )
     *
     * @var string
     */
    private $id;

    /**
     * @OA\Property(
     *     title="name",
     * )
     *
     * @var string
     */
    private $name;

    /**
     * @OA\Property(
     *     title="linkedin",
     * )
     *
     * @var string
     */
    private $linkedin;

    /**
     * @OA\Property(
     *     title="xing",
     * )
     *
     * @var string
     */
    private $xing;

    /**
     * @OA\Property(
     *     title="facebook",
     * )
     *
     * @var string
     */
    private $facebook;

    /**
     * @OA\Property(
     *     title="website",
     * )
     *
     * @var string
     */
    private $website;

    /**
     * @OA\Property(
     *     title="logo",
     * )
     *
     * @var string
     */
    private $logo;

    /**
     * @OA\Property(
     *     title="description",
     * )
     *
     * @var string
     */
    private $description;

    /**
     * @OA\Property(
     *     title="location",
     * )
     *
     * @var string
     */
    private $location;


    /**
     * @OA\Property(
     *     title="images",
     * )
     *
     * @var CompanyImage[]
     */
    private $images;

    /**
     * @OA\Property(
     *     title="businessAreas",
     * )
     *
     * @var BusinessArea[]
     */
    private $businessAreas;


    /**
     * @OA\Property(
     *     title="jobs",
     * )
     *
     * @var Job[]
     */
    private $jobs;


    public function images()
    {
        return $this->hasMany(CompanyImage::class);
    }

    public function businessAreas()
    {
        return $this->belongsToMany(BusinessArea::class, 'companies_business_areas');
    }

    public function jobs() {
        return $this->hasMany(Job::class);
    }

}
