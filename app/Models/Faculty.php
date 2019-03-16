<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @OA\Schema(
 *     description="Faculty model",
 *     title="Faculty",
 *     required={"name", "type", "location", "university_id"},
 *     @OA\Xml(name="Faculty")
 * )
 */
class Faculty extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'faculties';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'location',
        'type',
        'university_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_orgnr', 'univis_key', 'university_id'];

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
     *     title="type",
     * )
     *
     * @var string
     */
    private $type;

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
     * @OA\Property(
     *     title="university_id",
     * )
     *
     * @var integer
     */
    private $university_id;

    /**
    * @return BelongsTo
    */
    public function university() {
        return $this->belongsTo(University::class);
    }

    /**
     * @return HasMany
     */
    public function chairs() {
        return $this->hasMany(Chair::class);
    }

}
