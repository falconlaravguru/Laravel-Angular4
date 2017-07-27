<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Twilio\Jwt\ClientToken;
use File;

class TokenController extends Controller
{
    //
    public function newToken(Request $request)
    {
        $account_sid = config("services.twilio")['AccountSId'];
        $auth_token = config("services.twilio")['AuthToken'];
        $app_sid = config("services.twilio")['ApplicationSId'];

        $callerNumber = config("services.twilio")['PhoneNumber'];

        $client_token = new ClientToken($account_sid,$auth_token);

        $client_token->allowClientOutgoing($app_sid);
        $client_token->allowClientInComing("Receiver");

        $token = $client_token->generateToken();

        return response()->json(["token" => $token]);
    }
}
