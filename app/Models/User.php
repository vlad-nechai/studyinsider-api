<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;


/**
 * @OA\Schema(
 *     description="User model",
 *     title="User",
 *     required={"first_name", "last_name", "study_program_id", "password", "username", "email"},
 *     @OA\Xml(name="User")
 * )
 */
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens;
    use Notifiable;
    use HasRoles;

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'provider',
        'provider_id',
        'first_name',
        'last_name',
        'email',
        'username',
        'password',
        'gender',
        'birth_date',
        'location',
        'study_program_id',
        'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
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
     *     title="first_name",
     * )
     *
     * @var string
     */
    private $first_name;

    /**
     * @OA\Property(
     *     title="last_name",
     * )
     *
     * @var string
     */
    private $last_name;

    /**
     * @OA\Property(
     *     title="username",
     * )
     *
     * @var string
     */
    private $username;

    /**
     * @OA\Property(
     *     title="email",
     * )
     *
     * @var string
     */
    private $email;

    /**
     * @OA\Property(
     *     title="password",
     * )
     *
     * @var string
     */
    private $password;

    /**
     * @OA\Property(
     *     title="gender"
     * )
     *
     * @var integer
     */
    private $gender;

    /**
     * @OA\Property(
     *     format="datetime",
     *     title="birth_date",
     * )
     *
     * @var \DateTime
     */
    private $birth_date;

    /**
     * @OA\Property(
     *     title="location",
     * )
     *
     * @var string
     */
    private $location;

    /**
     * @OA\Property(
     *     title="study_program_id"
     * )
     *
     * @var integer
     */
    private $study_program_id;

    /**
     * Courses bookmarked by the user
     *
     * @return BelongsToMany
     */
    public function bookmarks() {
        return $this
            ->belongsToMany(Course::class,'course_semester_bookmarks')
            ->withTimestamps();
    }

    /**
     * Reviews created by User
     *
     * @return HasMany
     */
    public function reviews() {
        return $this->hasMany(Review::class,'user_id');
    }

    /**
     * Study Program pursued by User
     *
     * @return BelongsTo
     */
    public function studyProgram() {
        return $this
            ->belongsTo(StudyProgram::class);
    }



    /** Loads tags pro review pro user
     * TODO: rebuild models with operation efficiency
     * @return BelongsToMany
     */
    public function courseTags() {

        return $this->reviewedCourses()
            ->selectRaw('tag_course.tag_id, courses_tags.tag')
            ->join('tag_course', function($q) {
                $q->on('tag_course.course_id', '=', 'courses_rate.course_id');
                $q->on('tag_course.user_id', '=', 'courses_rate.user_id');
            })
            ->join('courses_tags', 'tag_course.tag_id', '=', 'courses_tags.id', 'inner');
    }

    /** Loads skills pro review pro user
     * TODO: rebuild models with operation efficiency
     * @return BelongsToMany
     */
    public function courseSkills() {

        return $this->reviewedCourses()
            ->selectRaw('skill_course.skill_id, skills.name')
            ->join('skill_course', function($q) {
                $q->on('skill_course.course_id', '=', 'courses_rate.course_id');
                $q->on('skill_course.user_id', '=', 'courses_rate.user_id');
            })
            ->join('skills', 'skill_course.skill_id', '=', 'skills.id', 'inner');
    }


    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'username' => $this->username,
            'email' => $this->email,
            'image' => $this->image,
        ];
    }
}
