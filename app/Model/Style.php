<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Style extends Model
{
    //mass assignable
    protected $fillable = [
        'description'
    ];
}
