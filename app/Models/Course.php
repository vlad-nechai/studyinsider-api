<?php

namespace App\Models;

use App\CourseTag;
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
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'count_reviews',
        'average_rating',
        'average_difficulty',
        'percentage_attendance_recommended',
        'percentage_recommend'
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
        return $this->belongsTo(Chair::class);
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
     * Course reviews
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews() {
        return $this->hasMany(Review::class, 'course_id');
    }

    /**
     * @return mixed
     */
    public function avgRating()
    {
        return $this->reviews()
            ->selectRaw('avg(courses_reviews.star_rating) as average, courses_reviews.course_id')
            ->groupBy('courses_reviews.course_id');
    }

    /**
     * @return mixed
     */
    public function avgDifficulty()
    {
        return $this->reviews()
            ->selectRaw('avg(courses_reviews.difficulty) as average, courses_reviews.course_id')
            ->groupBy('courses_reviews.course_id');
    }

    /**
     * @return mixed
     */
    public function percentageRecommendToFriends()
    {
        return $this->reviews()
            ->selectRaw('avg(courses_reviews.recommend)*100 as percentage, courses_reviews.course_id')
            ->groupBy('courses_reviews.course_id');
    }

    /**
     * @return mixed
     */
    public function percentageAttendanceRecommended()
    {
        return $this->reviews()
            ->selectRaw('avg(courses_reviews.attendance_recommended)*100 as percentage, courses_reviews.course_id')
            ->groupBy('courses_reviews.course_id');
    }

    /**
     * @return BelongsToMany
     */
    public function courseReviews() {
        return $this
            ->belongsToMany('App\Course','courses_rate');
    }

    /* =================
     * Model attributes
     * =================
     */

    public function getCountReviewsAttribute()
    {
        return $this->reviews()->count();
    }

    public function getAverageRatingAttribute()
    {
        return $this->avgRating()->first()['average'];
    }

    public function getAverageDifficultyAttribute()
    {
        return $this->avgDifficulty()->first()['average'];
    }

    public function getPercentageRecommendAttribute()
    {
        return $this->percentageRecommendToFriends()->first()['percentage'];
    }

    public function getPercentageAttendanceRecommendedAttribute()
    {
        return $this->percentageAttendanceRecommended()->first()['percentage'];
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
        return $this->belongsToMany(CourseTag::class,
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
        return $this->belongsToMany(Skill::class,
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
     * Get the administrator flag for the user.
     * TODO: check if it is necessary
     * @return bool
     */
    public function getIsAdminAttribute()
    {
        return $this->attributes['admin'] == 'yes';
    }
}
