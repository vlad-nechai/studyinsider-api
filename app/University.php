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
}
