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
                'id' => $value->id,
                'name' => $value->name,
                'country' => $value->country->country_name,
                'country_id' => $value->country_id,
                'city' => $value->city->city_name,
                'city_id' => $value->city_id,
                'league' => $value->league->title,
                'league_id' => $value->league_id,
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
            'id' => $data->id,
            'name' => $data->name,
            'country' => $data->country->country_name,
            'country_id' => $data->country_id,
            'city' => $data->city->city_name,
            'city_id' => $data->city_id,
            'league' => $data->league->title,
            'league_id' => $data->league_id,
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

        $edit_club = Club::find($id);

        $edit_club->name = $request_data['name'];
        
        $edit_club->country_id = (int)$request_data['country'];
        $edit_club->city_id = (int)$request_data['city'];
        $edit_club->league_id = (int)$request_data['league'];
        $edit_club->count = $request_data['count'];

        $edit_club->save();

        return "Club is updated successfully";
    }

    public function DeleteClub($id) {
        $delete_player = Club::find($id);
        
        $delete_player->delete();

        return "Delete Successfully";
    }
}
