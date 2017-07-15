<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\REST\Client;

class smsController extends Controller
{
    //
    public function sendMsg() {
        
        $AccountSid = "ACa0d4e66681744261006b422e94ac0c0a";
        $AuthToken = "aa337271f948f0ef04410295c417900c";

        // Step 3: instantiate a new Twilio Rest Client
        $client = new Client($AccountSid, $AuthToken);
        
        // Step 4: make an array of people we know, to send them a message. 
        // Feel free to change/add your own phone number and name here.
        $people = array(
            "+8613261665973" => "Alexis",
            "+8613811960635" => "Vice Delegate"
        );

        // Step 5: Loop over all our friends. $number is a phone number above, and 
        // $name is the name next to it
        foreach ($people as $number => $name) {

            $sms = $client->account->messages->create(

                // the number we are sending to - Any phone number
                $number,

                array(
                    // Step 6: Change the 'From' number below to be a valid Twilio number 
                    // that you've purchased
                    'from' => "+17786546097", 
                    
                    // the sms body
                    'body' => "Hey $name, I'm so glad to send SMS via Twilio"
                )
            );
            var_dump($sms,$number,$name);exit;

            // Display a confirmation message on the screen
            echo "Sent message to $name";
        }
    }
}