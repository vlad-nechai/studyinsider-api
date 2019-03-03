<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use \Nicolaslopezj\Searchable\SearchableTrait;

/**
 * @property int id
 * @property string name
 * @property string title
 * @property int gender
 * @property string univis_id
 * @property string univis_key
 * @property int chair_id
 * @property int created_at
 * @property int updated_at
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
