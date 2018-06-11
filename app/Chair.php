<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chair extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'chairs';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_key', 'univis_hash', 'department_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function courses() {
        return $this->hasMany('App\Course');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function professors() {
        return $this->hasMany('App\Professor');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department() {
        return $this->belongsTo('App\Department');
    }
}
