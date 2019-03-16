<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @OA\Schema(
 *     description="Chair model",
 *     title="Chair",
 *     required={"name", "faculty_id", "location"},
 *     @OA\Xml(name="Chair")
 * )
 */
class Chair extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'chairs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'faculty_id',
        'univis_id',
        'univis_orgnr',
        'univis_key',
        'location',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_key', 'univis_orgnr', 'faculty_id'];

    /**
     * @OA\Property(
     *     title="id"
     * )
     *
     * @var integer
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
     *     title="faculty_id",
     * )
     *
     * @var integer
     */
    private $faculty_id;

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
     *     title="image",
     * )
     *
     * @var string
     */
    private $image;

    /**
     * @return HasMany
     */
    public function courses() {
        return $this->hasMany(Course::class);
    }

    /**
     * @return HasMany
     */
    public function professors() {
        return $this->hasMany(Professor::class);
    }

    /**
     * @return BelongsTo
     */
    public function faculty() {
        return $this->belongsTo(Faculty::class);
    }

}
