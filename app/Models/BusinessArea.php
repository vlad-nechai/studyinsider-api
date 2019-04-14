<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     description="Business Area model",
 *     title="BusinessArea",
 *     required={"name"}
 * )
 */
class BusinessArea extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'business_areas';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * Hidden properties
     *
     * @var array
     */
    protected $hidden = [
        'id',
        'pivot',
        'created_at',
        'updated_at'
    ];

    /**
     * @OA\Property(
     *     title="name",
     * )
     *
     * @var string
     */
    private $name;
}
