<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     description="Course Tag model",
 *     title="CourseTag",
 *     required={"tag", "tag_type"},
 *     @OA\Xml(name="CourseTag")
 * )
 */
class CourseTag extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses_tags';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['id', 'tag_type', 'created_at', 'updated_at', 'pivot'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['tag', 'tag_type'];

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
     *     title="tag",
     * )
     *
     * @var string
     */
    private $tag;

    /**
     * @OA\Property(
     *     title="tag_type",
     *     default="predefined"
     * )
     *
     * @var string
     */
    private $tag_type;

}
