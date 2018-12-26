<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Review extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses_reviews';

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
