<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     description="Job model",
 *     title="Job",
 *     required={"title", "type", "description"}
 * )
 */
class Job extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'jobs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_id',
        'title',
        'type',
        'description'
    ];

    /**
     * Hidden properties
     *
     * @var array
     */
    protected $hidden = [
        'company_id',
        'created_at',
        'updated_at'
    ];

    /**
     * @OA\Property(
     *     title="id",
     * )
     *
     * @var int
     */
    private $id;

    /**
     * @OA\Property(
     *     title="title",
     * )
     *
     * @var string
     */
    private $title;

    /**
     * @OA\Property(
     *     title="type",
     * )
     *
     * @var string
     */
    private $type;

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
     *     title="company",
     * )
     *
     * @var Company
     */
    private $company;

    public function company() {
        return $this->belongsTo(Company::class);
    }
}
