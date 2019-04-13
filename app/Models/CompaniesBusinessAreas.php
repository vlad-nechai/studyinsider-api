<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CompaniesBusinessAreas extends Pivot
{
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'companies_business_areas';
}
