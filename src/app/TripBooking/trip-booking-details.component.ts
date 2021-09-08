
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
  
  constructor(private tripbookingservice:TripBookingService,private route:ActivatedRoute
    ,private router:Router) { }

  ngOnInit(): void {
    let id!:number;
    this.route.params.subscribe(data=>{
      id = data['id'];
      console.log(id);
    });
    this.tripbookingservice.getTripById(+id).subscribe(data=>{
      this.pageTitle=data.id;
      console.log(data);
    this.tripbooking=data})
  }

  backButton(){
    this.router.navigate(['triplist']);
  }

  editButton(){
    this.router.navigate(['triplist',this.tripbooking.id,'edit']);
  }
}
