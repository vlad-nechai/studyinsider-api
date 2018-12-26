<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class University extends Model
{
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
