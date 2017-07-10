import { Injectable, NgZone } from '@angular/core';
import { GoogleMapsAPIWrapper,MapsAPILoader } from '@agm/core';


declare var google: any;

@Injectable()
export class GoogleMapCustomService extends GoogleMapsAPIWrapper 
{
    constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
        super(__loader, __zone);
    }

    getLatLan(address: string, fn) {
        console.log(this.__loader,this.__zone);
        console.log('Getting Address - ', address);

        //at this point the variable google may be still undefined (google maps scripts still loading)
        //so load all the scripts, then...
        let locatInfo = {};

        this.__loader.load().then(() => {
            console.log("asdfasdfasdf");
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {

                if (status === google.maps.GeocoderStatus.OK) {
                    const place = results[0].geometry.location;
                    console.log(place);
                    locatInfo = {
                        'latitude': place.lat(),
                        'logitude': place.lng()
                    }
                    fn(locatInfo);
                } else {
                    console.log("error-service");
                    console.error('Error - ', results, ' & Status - ', status);
                    if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                        
                    }else {
                        
                    }
                    
                }
            });
        });
    }
}