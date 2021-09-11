import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'app-trip-booking-bill',
  templateUrl: './trip-booking-bill.component.html',
  styleUrls: ['./trip-booking-bill.component.css']
})
export class TripBookingBillComponent implements OnInit {
  id!:number;
  pageTitle:string = 'Total Bill';
  tripbooking!:TripBooking;

  constructor(private tripservice:TripBookingService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.data.subscribe((data)=>{
      this.tripbooking=data.trip;
    })
   /* this.route.params.subscribe(data=>{
      this.id = data['id'];
      console.log(this.id);
    });
   this.tripservice.getTripById(this.id).subscribe(data=>{
     console.log(data);
     this.tripbooking=data;
  });*/
  }

  endTrip(id:number){
    this.tripservice.endTrip(id).subscribe(data=>console.log(data));
    this.router.navigate(['tripbooking','trips']);
  }


}
