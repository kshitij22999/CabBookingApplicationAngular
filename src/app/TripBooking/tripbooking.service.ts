import { Injectable } from "@angular/core";
import { TripBooking } from "./tripbooking";
import {HttpClient} from '@angular/common/http'
import { Driver } from "../driver/driver";
import { DriverService } from "../driver/driver.service";

@Injectable({
    providedIn:'root'
})
export class TripBookingService{
    baseUrl:string='http://localhost:9191/project/rest/api';
    constructor(private httpclient:HttpClient,private driverservice:DriverService){}


    public createTripBooking(tripbooking:TripBooking){
        return this.httpclient.post<TripBooking>(`${this.baseUrl}/tripbookings`,tripbooking);
    }

    public getAllTrips(){
        return this.httpclient.get<TripBooking[]>(`${this.baseUrl}/tripbookings`);
    }

    public getNotAllocatedTrips(){
        return this.httpclient.get<TripBooking[]>(`${this.baseUrl}/tripbookings/free`);
    }

    public acceptTrip(id:number){
        let username=sessionStorage.getItem('username');
        let driver= this.driverservice.getDriverByUsername(username||'');
        return this.httpclient.put<TripBooking>(`${this.baseUrl}/drivers/accept/${id}`,driver);
    }

    public getTripById(id:number){
        return this.httpclient.get<TripBooking>(`${this.baseUrl}/tripbookings/${id}`);
    }

    public updateTrip(id:number){
        let tripbooking = this.getTripById(id);
        return this.httpclient.put<TripBooking>(`${this.baseUrl}/tripbookings`,tripbooking);
    }

    public deleteTrip(id:number){
        return this.httpclient.delete<TripBooking>(`${this.baseUrl}/tripbookings/${id}`);
    }

    public endTrip(id:number){
        return this.httpclient.get<TripBooking>(`${this.baseUrl}/drivers/endtrip/${id}`);
    }

}