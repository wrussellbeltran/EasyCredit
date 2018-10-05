<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Los atributos que son asignables.
     * @var array
     */
    protected $fillable = [
        'username',
    ];

    /**
     * Los atributos que deben estar ocultos.
     * @var array
     */
    protected $hidden = [
    ];
}
