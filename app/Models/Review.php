<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @OA\Schema(
 *     description="Review model",
 *     title="Review",
 *     required={"user_id", "course_id", "semester_id", "star_rating"},
 *     @OA\Xml(name="Review")
 * )
 */
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
     * @OA\Property(
     *     title="id"
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *     title="user_id"
     * )
     *
     * @var integer
     */
    private $user_id;

    /**
     * @OA\Property(
     *     title="course_id"
     * )
     *
     * @var integer
     */
    private $course_id;

    /**
     * @OA\Property(
     *     title="semester_id"
     * )
     *
     * @var integer
     */
    private $semester_id;

    /**
     * @OA\Property(
     *     title="star_rating",
     * )
     *
     * @var integer
     */
    private $star_rating;

    /**
     * @OA\Property(
     *     title="user_course_grade",
     * )
     *
     * @var double
     */
    private $user_course_grade;

    /**
     * @OA\Property(
     *     description="Would you recommend the course to your friends? 1: yes; 0: no",
     *     title="recommend",
     * )
     *
     * @var integer
     */
    private $recommend;

    /**
     * @OA\Property(
     *     description="How difficult the course was from 1 to 5",
     *     title="difficulty",
     * )
     *
     * @var integer
     */
    private $difficulty;

    /**
     * @OA\Property(
     *     description="Would you recommend to be physically present at the course? 1: yes; 0: no",
     *     title="attendance_recommended",
     * )
     *
     * @var integer
     */
    private $attendance_recommended;

    /**
     * @OA\Property(
     *     title="comment",
     * )
     *
     * @var string
     */
    private $comment;

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
