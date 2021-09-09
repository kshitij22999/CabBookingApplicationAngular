import { Component, OnInit } from '@angular/core';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'app-trip-booking-bill',
  templateUrl: './trip-booking-bill.component.html',
  styleUrls: ['./trip-booking-bill.component.css']
})
export class TripBookingBillComponent implements OnInit {

  pageTitle:string = 'Total Bill';
  tripbooking!:TripBooking;

  constructor(private tripservice:TripBookingService) { }

  ngOnInit(): void {
   
  }

}
