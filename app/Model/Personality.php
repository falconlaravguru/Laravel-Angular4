<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Personality extends Model
{
    //mass assignable
    protected $fillable = [
        'description'
    ];
}
