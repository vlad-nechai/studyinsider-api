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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function reviews() {
        return $this->belongsToMany('App\User',
            'courses_rate', 'course_id', 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function courseReviews() {
        return $this
            ->belongsToMany('App\Course','courses_rate');
    }

    /**
     * @return mixed
     */
    public function avgRating()
    {
        return $this->courseReviews()
            ->selectRaw('avg(courses_rate.star_rating) as average, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return BelongsToMany
     */
    public function users() {
        return $this->belongsToMany('App\User',
            'tag_course', 'course_id', 'user_id');
    }

    /**
     * @return BelongsToMany
     */
    public function tags() {
        return $this->belongsToMany('App\CourseTag',
            'tag_course', 'course_id', 'tag_id');
    }

    /**
     * top 5 tags for the course
     * @return BelongsToMany
     */
    public function topTags() {
        return $this->tags()
            ->selectRaw('count(tag_course.tag_id) as tagged, t.tag')
            ->join('courses_tags as t', 't.id', '=', 'tag_course.tag_id', 'inner')
            ->groupBy('tag_course.tag_id', 'tag_course.course_id', 't.tag')
            ->orderBy('tagged','desc')
            ->limit(5);
    }

    /**
     * @return BelongsToMany
     */
    public function skills() {
        return $this->belongsToMany('App\Skill',
            'skill_course', 'course_id', 'skill_id');
    }

    /**
     * top 5 skills for the course
     * @return BelongsToMany
     */
    public function topSkills() {
        return $this->skills()
            ->selectRaw('count(skill_course.skill_id) as tagged, s.name')
            ->join('skills as s', 's.id', '=', 'skill_course.skill_id', 'inner')
            ->groupBy('skill_course.skill_id', 'skill_course.course_id', 's.name')
            ->orderBy('tagged','desc')
            ->limit(5);
    }
}
