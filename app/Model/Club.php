<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    //mass assignment
    protected $fillable = [
        'name','country_id','city_id','league_id','count'
    ];

    protected function country() {
        return $this->belongsTo('App\Model\Country');
    }
    protected function city() {
        return $this->belongsTo('App\Model\City');
    }
    protected function league() {
        return $this->belongsTo('App\Model\League');
    }
}
