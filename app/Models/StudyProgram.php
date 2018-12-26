<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Nicolaslopezj\Searchable\SearchableTrait;

class StudyProgram extends Model
{

    use SearchableTrait;

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
