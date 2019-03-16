<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @OA\Schema(
 *     description="University model",
 *     title="University",
 *     required={"name", "location", "image", "type"},
 *     @OA\Xml(name="University")
 * )
 */
class University extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'universities';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'location',
        'type'
    ];

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
     *     title="type",
     * )
     *
     * @var string
     */
    private $type;

    /**
     * @return HasMany
     */
    public function faculties() {
        return $this->hasMany(Faculty::class);
    }

    /**
     * @return HasMany
     */
    public function studyPrograms() {
        return $this->hasMany(StudyProgram::class);
    }
}
