<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsToMany;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use \Nicolaslopezj\Searchable\SearchableTrait;

/**
 * @property string name
 * @property string short_name
 * @property int chair_id
 * @property string course_type
 * @property string univis_id
 * @property string univis_key
 * @property string univis_hash
 * @property string ects
 * @property int sws
 * @property int max_turnout
 * @property string language
 * @property string summary
 * @property string semester
 */
class Course extends Model
{
    use SearchableTrait;

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
        'course_type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['chair_id'];

    /**
     * Searchable rules.
     *
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'short_name' => 20,
            'name' => 10
        ],
    ];

    /**
     * @return BelongsTo
     */
    public function chair() {
        return $this->belongsTo('App\Chair');
    }

    /**
     * Get all of the professors for the course.
     */
    public function professors()
    {
        return $this->belongsToMany(
            Professor::class,
            'course_professor_semester',
            'course_id',
            'professor_id');
    }

    /**
     * Get all of the semesters, when the course is offered.
     */
    public function semesters()
    {
        return $this->belongsToMany(
            Semester::class,
            'course_professor_semester',
            'course_id',
            'semester_id');
    }

    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews() {
        return $this->hasMany(Review::class,
            'course_id');
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
     * @return mixed
     */
    public function avgDifficulty()
    {
        return $this->courseReviews()
            ->selectRaw('avg(courses_rate.difficulty) as average, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return mixed
     */
    public function percentageRecommendToFriends()
    {
        return $this->courseReviews()
            ->selectRaw('avg(courses_rate.recommend_to_friends)*100 as percentage, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return mixed
     */
    public function percentageMustAttend()
    {
        return $this->courseReviews()
            ->selectRaw('avg(courses_rate.must_attend)*100 as percentage, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return mixed
     */
    public function percentagePayAttentionInClass()
    {
        return $this->courseReviews()
            ->selectRaw('avg(courses_rate.pay_attention_in_class)*100 as percentage, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return mixed
     */
    public function percentageAttendanceRequired()
    {
        return $this->courseReviews()
            ->selectRaw('avg(courses_rate.attendance_required)*100 as percentage, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * @return BelongsToMany
     */
    public function usersWhoTagged() {
        return $this->belongsToMany('App\User',
            'tag_course', 'course_id', 'user_id')->withTimestamps();
    }

    /**
     * @return BelongsToMany
     */
    public function usersWhoAddedSkills() {
        return $this->belongsToMany('App\User',
            'skill_course', 'course_id', 'user_id')->withTimestamps();
    }

    /**
     * @return BelongsToMany
     */
    public function tags() {
        return $this->belongsToMany('App\CourseTag',
            'tag_course', 'course_id', 'tag_id')
            ->withPivot('user_id');
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

    /**
     * top 3 courses filtered by faculty and/or review property
     * @return BelongsToMany
     */
    public function top3() {
        return $this->reviews()
            ->selectRaw('avg(courses_rate.star_rating) as average, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * top 4 courses filtered by faculty and/or review property
     * @return BelongsToMany
     */
    public function top4() {
        return $this->reviews()
            ->selectRaw('avg(courses_rate.star_rating) as average, courses_rate.course_id')
            ->groupBy('courses_rate.course_id');
    }

    /**
     * Get the administrator flag for the user.
     * TODO: check if it is necessary
     * @return bool
     */
    public function getIsAdminAttribute()
    {
        return $this->attributes['admin'] == 'yes';
    }
}
