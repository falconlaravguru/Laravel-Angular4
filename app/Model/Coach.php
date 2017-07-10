<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    //mass assignable
    protected $fillable = [
        'name','age','club_id','personality_id'
    ];
}
