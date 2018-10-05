<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{
	/**
	 * Tabla requests.
	 * @var string
	 */
    protected $table = 'requests';

    /**
     * Releción de la tabla requests y users donde requests.user_id sea igual a users.id.
     * @return Devuelve todo lo relacionado 
     */
    public function users() {
        return $this->belongsTo('App\user', 'user_id');
    }
}
