import { Component, OnInit, Output } from '@angular/core';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'trip-booking-list',
  templateUrl: './trip-booking-list.component.html',
  styleUrls: ['./trip-booking-list.component.css']
})
export class TripBookingListComponent implements OnInit {
  tripbookinglst:TripBooking[]=[];


  

  constructor(private tripbookingservice:TripBookingService) { }

  ngOnInit(): void {
    this.tripbookingservice.getAllTrips().subscribe({
      next: tripbookinglst =>{
        this.tripbookinglst = tripbookinglst;
      }
    })
  }

 

}
