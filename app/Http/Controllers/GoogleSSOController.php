<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;

use App\User;

class GoogleSSOController extends Controller
{
    //
    public function SignIn(Request $request) {

        header('Access-Control-Allow-Origin: http://localhost:8000');  //I have also tried the * wildcard and get the same response
        header("Access-Control-Allow-Credentials: true");
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        header('Access-Control-Max-Age: 1000');
        header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');


        $client_id = config('services.google.client_id');
        $client_secret = config('services.google.client_secret');
        $developer_key = config('services.google.developer_key');

        $redirect_uri = route('GoogleAuthentication');

        $guzzleClient = new \GuzzleHttp\Client(array( 'curl' => array( CURLOPT_SSL_VERIFYPEER => false, ), ));

        $google_client = new \Google_Client();

        $google_client->setApplicationName("Laravel Google Sign-In");
        $google_client->setAccessType('online');
        $google_client->setClientId("974459150254-252bcip1dsnf7kgg8ojdb6097dfidtn4.apps.googleusercontent.com");
        $google_client->setClientSecret("lKbGz3T-QYAK4c6l_2sY2gYW");
        $google_client->setRedirectUri($redirect_uri);
        $google_client->setDeveloperKey("AIzaSyDcnBI5pBx271acGRyPhom48zrIo6tlp7k");
        $google_client->setScopes(array(
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ));
        $httpClient = $google_client->setHttpClient($guzzleClient);

        $google_oauth_service = new \Google_Service_Oauth2($google_client);

        if ($request->get('code')){
            //Request the AccessToken by passing authorization code
            $google_client->authenticate($request->get('code'));
            
            $token = session()->put('token', $google_client->getAccessToken());
            
        }

        if (session()->get('token'))
        {
            $google_client->setAccessToken(session()->get('token'));
        }
        if ($google_client->getAccessToken())
        {
            //For logged in user, get details from google using access token
            $guser = $google_oauth_service->userinfo->get();  
                
            $token = session()->put('name', $guser['name']);
            if ($user =User::where('email',$guser['email'])->first())
            {
                //logged your user via auth login
                
                Auth::login($user);
                // return response()->json(['GLogin' => 'Google Log In Successfully'], 200);
                return redirect('/#/players');
            }else{
                //register your user with response data
                User::create([
                            'name' => $guser['name'],
                            'username' => $guser['family_name'],
                            'email' =>$guser['email'],
                            'password' => bcrypt($guser['name']),
                        ]);
                $user = new User;

                $user->name = $guser['name'];
                $user->username = $guser['family_name'];
                $user->email = $guser['email'];
                $user->password = bcrypt($guser['name']);

                $user->save();

                Auth::login($user);

                return redirect('/#/players');
            }
        }
        else {
            //For Guest user, get google login url
            $authUrl = $google_client->createAuthUrl();
            return response()->json(["authUrl" => $authUrl]);
        }
    }
}
