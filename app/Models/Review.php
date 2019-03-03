<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Review extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses_reviews';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'course_id',
        'user_id',
        'semester_id',
        'star_rating',
        'user_course_grade',
        'recommend',
        'difficulty',
        'attendance_recommended',
        'comment'
    ];

    /**
     * Skills associated with this review
     *
     * @return BelongsToMany
     */
    public function skills() {
        return $this->belongsToMany(
            Skill::class,
            'skill_course',
            'course_review_id',
            'skill_id');
    }

    /**
     * Tags associated with this review
     *
     * @return BelongsToMany
     */
    public function tags() {
        return $this->belongsToMany(
            CourseTag::class,
            'tag_course',
            'course_review_id',
            'tag_id');
    }
}
