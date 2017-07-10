<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    //mass assignable
    protected $fillable = [
        'city_name'
    ];
}
