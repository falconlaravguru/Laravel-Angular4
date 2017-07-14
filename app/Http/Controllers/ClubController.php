<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Club;

class ClubController extends Controller
{
    //
    //
    public function GetClubs() 
    {
        $data = Club::orderby('count','desc')->get();

        $response_data = [];

        foreach ($data as $key => $value) {
            
            $modified_data = [
                'name' => $value->name,
                'country' => $value->country->country_name,
                'city' => $value->city->city_name,
                'league' => $value->league->title,
                'count' => $value->count,
            ];

            array_push($response_data,$modified_data);
        }
        return $response_data;
    }
    public function GetClub($id)
    {
        $data = Club::find($id);

        $response_data = [
            'name' => $data->name,
            'country' => $data->country->country_name,
            'city' => $data->city->city_name,
            'league' => $data->league->title,
            'count' => $data->count,
        ];

        return $response_data;
    }

    public function CreateClub(Request $request) {
        
        $request_data = $request->all();
        
        $new_club = new Club;

        $new_club->name = $request_data['name'];
        
        $new_club->country_id = (int)$request_data['country'];
        $new_club->city_id = (int)$request_data['city'];
        $new_club->league_id = (int)$request_data['league'];
        $new_club->count = $request_data['count'];

        $new_club->save();

        return "Club Created Successfully";
    }

    public function UpdateClub($id) {

        $request_data = request()->all();

        $edit_player = Player::find($id);

        $new_club->name = $request_data['name'];
        
        $new_club->country_id = (int)$request_data['country'];
        $new_club->city_id = (int)$request_data['city'];
        $new_club->league_id = (int)$request_data['league'];
        $new_club->count = $request_data['count'];

        $edit_club->save();

        return "Club is updated successfully";
    }

    public function DeleteClub($id) {
        $delete_player = Club::find($id);
        
        $delete_player->delete();

        return "Delete Successfully";
    }
}
