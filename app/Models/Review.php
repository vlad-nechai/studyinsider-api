<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'user',
        'semester'
    ];

    /**
     * The attributes that are hidden.
     *
     * @var array
     */
    protected $hidden = [
        'course_id',
        'user_id',
        'semester_id'
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
     *     description="How difficult the course was from 0 to 4",
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
     * @OA\Property(
     *     title="skills",
     * )
     *
     * @var Skill[]
     */
    private $skills;

    /**
     * @OA\Property(
     *     title="tags",
     * )
     *
     * @var CourseTag[]
     */
    private $tags;

    /**
     * @OA\Property(
     *     title="user",
     * )
     *
     * @var User
     */
    private $user;

    /**
     * @OA\Property(
     *     title="semester",
     * )
     *
     * @var Semester
     */
    private $semester;


    /**
     * User that left review
     *
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Course that was reviewed
     *
     * @return BelongsTo
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * Course that was reviewed
     *
     * @return BelongsTo
     */
    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }

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


    /* ===================================
     *  Model attributes
     * ===================================
     */
    public function getUserAttribute(){
        return $this->user()->get();
    }

    public function getSemesterAttribute() {
        return $this->semester()->get();
    }
}
