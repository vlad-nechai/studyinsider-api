<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int id
 * @property string name
 * @property string type
 * @property string univis_id
 * @property string univis_orgnr
 * @property string univis_key
 * @property string location
 * @property string image
 * @property int university_id
 * @property int created_at
 * @property int updated_at
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
    protected $hidden = ['univis_id', 'univis_orgnr', 'univis_key', 'university_id'];

    /**
    * @return BelongsTo
    */
    public function university() {
        return $this->belongsTo(University::class);
    }

    /**
     * @return HasMany
     */
    public function chairs() {
        return $this->hasMany(Chair::class);
    }
}
