
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'trip-booking-details',
  templateUrl: './trip-booking-details.component.html',
  styleUrls: ['./trip-booking-details.component.css']
})
export class TripBookingDetailsComponent implements OnInit {

  pageTitle!:number;
  tripbooking!:TripBooking;
  
  constructor(private tripbookingservice:TripBookingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
   /* this.tripbookingservice.getTripById(+id).subscribe(data=>{
      this.pageTitle=data.id;
      console.log(data);
    this.tripbooking=data})*/
  }

}
