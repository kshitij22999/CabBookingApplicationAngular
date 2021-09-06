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

    public getAllTrips(){
        return this.httpclient.get<TripBooking[]>(this.baseUrl+'/tripbookings')
    }

    public getNotAllocatedTrips(){
        return this.httpclient.get<TripBooking[]>(this.baseUrl+'/tripbookings/free')
    }

    public acceptTrip(id:number){
        return this.httpclient.put<TripBooking>(this.baseUrl+'/drivers/accept',id)
    }

}