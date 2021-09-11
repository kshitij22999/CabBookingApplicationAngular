import { Injectable } from "@angular/core";
import { TripBooking } from "./tripbooking";
import {HttpClient} from '@angular/common/http'
import { Driver } from "../driver/driver";
import { DriverService } from "../driver/driver.service";
import { Customer } from "../customer/customer";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TripBookingService{
    baseUrl:string='http://localhost:9191/project/rest/api';
    constructor(private httpclient:HttpClient,private driverservice:DriverService){}


    public createTripBooking(id:number,tripbooking:TripBooking){
        return this.httpclient.post<TripBooking>(`${this.baseUrl}/customers/book/${id}`,tripbooking);
    }

    public getAllTrips(){
        console.log('service layer');
        return this.httpclient.get<TripBooking[]>(`${this.baseUrl}/tripbookings`);
    }

    public getNotAllocatedTrips(){
        return this.httpclient.get<TripBooking[]>(`${this.baseUrl}/tripbookings/free`);
    }

    public acceptTrip(id:number,driver:Driver){
        return this.httpclient.put<TripBooking>(`${this.baseUrl}/drivers/accept/${id}`,driver);
    }

    public getTripById(id:number):Observable<TripBooking>{
        return this.httpclient.get<TripBooking>(`${this.baseUrl}/tripbookings/${id}`);
    }

    public updateTrip(tripbooking:TripBooking){
        return this.httpclient.put<TripBooking>(`${this.baseUrl}/tripbookings/${tripbooking.id}`,tripbooking);
    }

    public deleteTrip(id:number){
        console.log(`${this.baseUrl}/tripbookings/${id}`);
        return this.httpclient.delete<TripBooking>(`${this.baseUrl}/tripbookings/${id}`);
    }

    public endTrip(id:number){
        return this.httpclient.patch<TripBooking>(`${this.baseUrl}/drivers/endtrip/${id}`);
    }

    public getCustomerByUsername(username:string){
        return this.httpclient.get<Customer>(`${this.baseUrl}/customers/username/${username}`);
    }
}