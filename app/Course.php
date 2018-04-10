<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';

    /*
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function chair() {
        return $this->belongsTo('App\Chair');
    }
}
