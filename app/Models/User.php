<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens;
    use Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'provider',
        'provider_id',
        'email',
        'username',
        'password',
        'sex',
        'major_id',
        'birth_place',
        'location',
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
     * @return BelongsToMany
     */
    public function bookmarks() {
        return $this
            ->belongsToMany('App\Course','course_bookmark')->withTimestamps();
    }

    /**
     * @return BelongsToMany
     */
    public function reviewedCourses() {
        return $this
            ->belongsToMany('App\Course','courses_rate')->withTimestamps();
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
     * @return BelongsTo
     */
    public function major() {
        return $this
            ->belongsTo('App\StudyProgram');
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
            'name' => $this->name,
            'email' => $this->email,
            'image' => $this->image,
        ];
    }
}
