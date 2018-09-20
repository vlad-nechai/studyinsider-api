<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property int course_id
 * @property string start_time
 * @property string end_time
 * @property string room
 * @property string repeat
 * @property int created_at
 * @property int updated_at
 */
class CourseTerm extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses_terms';
}
