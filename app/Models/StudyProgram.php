<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * @OA\Schema(
 *     description="Study Program model",
 *     title="StudyProgram",
 *     required={"name", "university_id", "type"},
 *     @OA\Xml(name="StudyProgram")
 * )
 */
class StudyProgram extends Model
{

    use SearchableTrait;

    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'study_programs';

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
     *     title="university_id",
     * )
     *
     * @var integer
     */
    private $university_id;

    /**
     * @OA\Property(
     *     title="type",
     * )
     *
     * @var string
     */
    private $type;

    /**
     * University that study program is associated with
     *
     * @return BelongsTo
     */
    public function university() {
        return $this->belongsTo(University::class);
    }

    /**
     * Users that are enlisted in the study program
     *
     * @return HasMany
     */
    public function users() {
        return $this->hasMany(User::class, 'study_program_id');
    }
}
