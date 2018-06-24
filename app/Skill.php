<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'skills';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['id', 'origin', 'language', 'created_at', 'updated_at'];

    /**
     * @return BelongsToMany
     */
    public function courses() {
        return $this
            ->belongsToMany('App\Course','skill_course', 'skill_id', 'course_id');
    }

    /**
     * TODO: review effectiveness of the query
     * 3 most tagged courses for each skill
     * @return mixed
     */
    public function topCourses()
    {
        return $this->courses()
            ->selectRaw('count(skill_course.course_id) as tagged, c.name')
            ->join('courses as c', 'c.id', '=', 'skill_course.course_id', 'inner')
            ->groupBy('skill_course.skill_id', 'skill_course.course_id', 'c.name')
            ->orderBy('tagged','desc')
            ->limit(3);
    }
}
