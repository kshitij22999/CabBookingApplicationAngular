import { Injectable } from "@angular/core";
import { TripBooking } from "./tripbooking";
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class TripBookingService{
    baseUrl:string='';
    constructor(private httpclient:HttpClient){}


    public createTripBooking(tripbooking:TripBooking){
        return this.httpclient.post<TripBooking>(this.baseUrl,tripbooking);
    }

}