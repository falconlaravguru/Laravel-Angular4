<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    //mass assignment
    protected $fillable = [
        'name','country_id','city_id','league_id','count'
    ];
}
