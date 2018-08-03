<?php

namespace App;

namespace App;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
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
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
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
}
