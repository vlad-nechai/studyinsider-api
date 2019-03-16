<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use \Nicolaslopezj\Searchable\SearchableTrait;

/**
 * @OA\Schema(
 *     description="Professor model",
 *     title="Professor",
 *     required={"name", "gender", "chair_id"},
 *     @OA\Xml(name="Professor")
 * )
 */
class Professor extends Model
{

    use SearchableTrait;

    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'professors';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'title',
        'gender',
        'chair_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_key', 'chair_id', 'pivot'];

    /**
     * Searchable rules.
     *
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'name' => 100
        ],
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
     *     title="title",
     * )
     *
     * @var string
     */
    private $title;

    /**
     * @OA\Property(
     *     title="gender",
     * )
     *
     * @var string
     */
    private $gender;

    /**
     * @OA\Property(
     *     title="chair_id",
     * )
     *
     * @var integer
     */
    private $chair_id;

    /**
     * Chair to which Prof belongs to
     *
     * @return BelongsTo
     */
    public function chair() {
        return $this->belongsTo(Chair::class);
    }

    /**
     * Courses that professor teaches
     *
     * @return BelongsToMany
     */
    public function courses() {
        return $this->belongsToMany(Course::class,
            'course_professor_semester', 'professor_id', 'course_id');
    }
}
