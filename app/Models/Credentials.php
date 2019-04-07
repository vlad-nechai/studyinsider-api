<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * @OA\Schema(
 *     description="Credentials for login",
 *     title="Credentials",
 *     required={"login", "password"},
 *     @OA\Xml(name="Credentials")
 * )
 */
class Credentials extends Model
{

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


}
