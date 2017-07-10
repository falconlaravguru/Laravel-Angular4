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
        $styles = [];

        foreach ($parse_style as $value) {
            $style = Style::find($value)->description;
            array_push($styles,[$value => $style]);
        }

        $response_data = [
            "id" => $data->id,
            "name" => $data->name,
            "age" => $data->age,
            "club" => $data->club->name,
            "style" => $styles,
            "style_id" => $data->style_id,
            "role" => $data->role->description,
            "personality" => $data->personality->description
        ];

        return $response_data;
    }

    public function CreatePlayer(Request $request) {
        $request_data = $request->all();
        print_r($request_data);exit;
        $new_player = new Player;

        $new_player->name = $request_data->name;
        $new_player->age = $request_data->age;
        $new_player->role_id = $request_data->role;
        $new_player->club_id = $request_data->club;
        $new_player->style_id = $request_data->style;
        $new_player->personality_id = $request_data->personality;

        $new_player->save();

        return $request_data;
    }
}
