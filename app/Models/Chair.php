<?php

namespace App\Models;

use App\Faculty;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string name
 * @property int department_id
 * @property string univis_id
 * @property string univis_orgnr
 * @property string univis_key
 * @property string univis_hash
 * @property string location
 */
class Chair extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'chairs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'location',
        'department_id'
    ];

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
        return $this->hasMany(Course::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function professors() {
        return $this->hasMany(Professor::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function faculty() {
        return $this->belongsTo(Faculty::class);
    }

}
