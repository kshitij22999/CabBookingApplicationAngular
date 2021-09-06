import { Component, OnInit } from '@angular/core';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'app-trip-booking-add',
  templateUrl: './trip-booking-add.component.html',
  styleUrls: ['./trip-booking-add.component.css']
})
export class TripBookingAddComponent implements OnInit {

  tripBooking!:TripBooking;

  constructor(private tripbookingservice:TripBookingService) { }

  ngOnInit(): void {
  }

  createTripBooking(form1: any):void{
    this.tripbookingservice.createTripBooking(this.tripBooking).
    subscribe( data =>{
      console.log(data);
    })
  }

}
