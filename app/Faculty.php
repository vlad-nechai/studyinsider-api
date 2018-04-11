<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'faculties';

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function university() {
        return $this->belongsTo('App\University');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function chairs() {
        return $this->hasMany('App\Chair');
    }
}
