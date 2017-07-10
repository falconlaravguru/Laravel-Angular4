<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    //mass assignable
    protected $fillable = [
        'country_name'
    ];
}
