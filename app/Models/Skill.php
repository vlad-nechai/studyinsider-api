<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use \Nicolaslopezj\Searchable\SearchableTrait;


/**
 * @OA\Schema(
 *     description="Skill model",
 *     title="Skill",
 *     required={"name", "language", "origin"},
 *     @OA\Xml(name="Skill")
 * )
 */
class Skill extends Model
{

    use SearchableTrait;

    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'skills';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['id', 'origin', 'language', 'created_at', 'updated_at', 'pivot'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'language', 'origin'];


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

    /**
     * @OA\Property(
     *     title="language",
     *     default="de"
     * )
     *
     * @var string
     */
    private $language;

    /**
     * @OA\Property(
     *     title="origin",
     *     default="user_defined"
     * )
     *
     * @var integer
     */
    private $origin;

    /**
     * Searchable rules.
     *
     * @var array
     */
    protected $searchable = [
        'columns' => [
            'name' => 10
        ],
    ];

}
