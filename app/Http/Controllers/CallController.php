<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Twiml;

class CallController extends Controller
{
    //
    public function NewCall(Request $request) {
        
        $response = new Twiml();
        
        $callerIdNumber = config("services.twilio")['PhoneNumber'];
        
        $dial = $response->dial(['callerId' => $callerIdNumber]);
        
        $phoneNumberToDial = $request->input('phoneNumber');

        $dial->number("+8613261665973");
        $response->say("Thanks");

        return $response;
    }
}
