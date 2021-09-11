
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!:number;
  
  constructor(private tripbookingservice:TripBookingService,private route:ActivatedRoute
    ,private router:Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log(this.id);
    });
    this.tripbookingservice.getTripById(+this.id).subscribe(data=>{
      this.pageTitle=data.id;
      console.log(data);
    this.tripbooking=data})
  }

  backButton(){
    this.router.navigate(['tripbooking','triplist']);
  }

  editButton(){
    this.router.navigate(['tripbooking','triplist',this.tripbooking.id,'edit']);
  }
}
