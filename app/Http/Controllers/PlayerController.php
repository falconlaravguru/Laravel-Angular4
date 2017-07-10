<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Player;
use App\Model\Style;

class PlayerController extends Controller
{
    //
    public function GetPlayers() 
    {
        $data = Player::orderby('age','desc')->get();

        $response_data = [];

        foreach ($data as $key => $value) {
            
           $parse_style = json_decode($value->style_id);

            $styles = '';

            foreach ($parse_style as $val) {
                $styles .= Style::find($val)->description . ' ';
            }
            
            $modified_data = [
                "id" => $value->id,
                "name" => $value->name,
                "age" => $value->age,
                "club" => $value->club->name,
                "style" => $styles,
                "role" => $value->role->description,
                "personality" => $value->personality->description
            ];

            array_push($response_data,$modified_data);
        }

        return $response_data;
        
    }
    public function GetPlayer($id)
    {
        $data = Player::find($id);

        $parse_style = json_decode($data->style_id);
        $styles = '';

        foreach ($parse_style as $value) {
            $styles .= Style::find($value)->description . ' ';
        }

        $response_data = [
            "id" => $data->id,
            "name" => $data->name,
            "age" => $data->age,
            "club" => $data->club->name,
            "style" => $styles,
            "role" => $data->role->description,
            "personality" => $data->personality->description
        ];

        return $response_data;
    }
}
