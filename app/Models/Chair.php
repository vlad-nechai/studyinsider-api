<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int id
 * @property string name
 * @property int faculty_id
 * @property string univis_id
 * @property string univis_orgnr
 * @property string univis_key
 * @property string location
 * @property string image
 * @property int created_at
 * @property int updated_at
 */
class Chair extends Model
{
    public $timestamps = true;

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
        'faculty_id',
        'univis_id',
        'univis_orgnr',
        'univis_key',
        'location',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_key', 'univis_orgnr', 'faculty_id'];

    /**
     * @return HasMany
     */
    public function courses() {
        return $this->hasMany(Course::class);
    }

    /**
     * @return HasMany
     */
    public function professors() {
        return $this->hasMany(Professor::class);
    }

    /**
     * @return BelongsTo
     */
    public function faculty() {
        return $this->belongsTo(Faculty::class);
    }

}
