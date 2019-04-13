<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     description="Company image model",
 *     title="CompanyImage",
 * )
 */
class CompanyImage extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'company_images';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'url'
    ];

    /**
     * Hidden properties
     *
     * @var array
     */
    protected $hidden = [
        'id',
        'company_id',
        'created_at',
        'updated_at'
    ];

    /**
     * @OA\Property(
     *     title="url",
     * )
     *
     * @var string
     */
    private $url;
}
