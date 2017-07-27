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

        if (isset($phoneNumberToDial)) {
            $dial->number("+8613261665973");
            $response->say("Thanks");
        } else {
            $dial->client('Receiver');
            $response->say("Thanks for your reply, Jake");
        }

        return $response;
    }
}
