<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    //mass assignment
    protected $fillable = [
        'name','age','club_id','style_id','role_id','personality_id'
    ];
    protected $cast = [
        'style_id' => 'array',
    ];

    public function club() 
    {
        return $this->belongsTo('App\Model\Club');
    }

    public function style()
    {
        return $this->belongsTo('App\Model\Style');
    }
    public function role()
    {
        return $this->belongsTo('App\Model\Role');
    }
    public function personality()
    {
        return $this->belongsTo('App\Model\Personality');
    }
}
