<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'universities';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function faculties() {
        return $this->hasMany('App\Faculty');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function majors() {
        return $this->belongsToMany('App\Major',
            'major_university', 'university_id', 'major_id');
    }
}
