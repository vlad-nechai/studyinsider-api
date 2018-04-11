<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'majors';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function universities() {
        return $this->belongsToMany('App\University',
            'major_university_table', 'major_id', 'uni_id');
    }
}
