<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string name
 * @property string type
 * @property int university_id
 * @property string univis_id
 * @property string univis_orgnr
 * @property string univis_key
 * @property string univis_hash
 * @property string location
 */
class Faculty extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'faculties';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'location',
        'type',
        'university_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_orgnr', 'univis_key', 'univis_hash', 'university_id'];

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function university() {
        return $this->belongsTo('App\University');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function departments() {
        return $this->hasMany('App\Department');
    }
}
