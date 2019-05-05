<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     description="Semester model",
 *     title="Semester",
 *     required={"name"},
 *     @OA\Xml(name="Semester")
 * )
 */
class Semester extends Model
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'semesters';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['pivot', 'created_at', 'updated_at'];

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
     *     title="name",
     * )
     *
     * @var string
     */
    private $name;

    public static function actual() {
        return Semester::orderBy('created_at', 'desc')->first();
    }
}
