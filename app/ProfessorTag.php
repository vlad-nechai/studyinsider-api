<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProfessorTag extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'professors_tags';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['id', 'tag_type', 'created_at', 'updated_at'];

    /**
     * @return BelongsToMany
     */
    public function professors() {
        return $this
            ->belongsToMany('App\Professor','tag_professor', 'tag_id', 'professor_id');
    }

    /**
     * TODO: review effectiveness of the query
     * 3 most tagged courses for each tag
     * @return mixed
     */
    public function topProfessors()
    {
        return $this->professors()
            ->selectRaw('count(tag_professor.professor_id) as tagged, p.name')
            ->join('professors as p', 'p.id', '=', 'tag_professor.professor_id', 'inner')
            ->groupBy('tag_professor.tag_id', 'tag_professor.professor_id', 'p.name')
            ->orderBy('tagged','desc')
            ->limit(3);
    }
}
