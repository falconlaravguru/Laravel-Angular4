<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    //mass assignable
    protected $fillable = [
        'title'
    ];
}
