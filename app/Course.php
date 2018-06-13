<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsToMany;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class Course extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'short_name',
        'chair_id',
        'course_type',
        'ects',
        'sws',
        'max_turnout',
        'language',
        'summary'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['univis_id', 'univis_key', 'univis_hash', 'chair_id'];

    /**
     * @return BelongsTo
     */
    public function chair() {
        return $this->belongsTo('App\Chair');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function professors() {
        return $this->belongsToMany('App\Professor',
            'course_professor', 'course_id', 'prof_id');
    }

    /**
     * @return BelongsToMany
     */
    public function reviews() {
        return $this
            ->belongsToMany('App\Course','courses_rate');
    }

    /**
     * @return mixed
     */
    public function avgRating()
    {
        return $this->reviews()
            ->selectRaw('avg(courses_rate.star_rating) as average, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return BelongsToMany
     */
    public function tags() {
        return $this->belongsToMany('App\CourseTag',
            'tag_course', 'course_id', 'tag_id');
    }

}
