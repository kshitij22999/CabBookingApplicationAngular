import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'trip-booking-edit',
  templateUrl: './trip-booking-edit.component.html',
  styleUrls: ['./trip-booking-edit.component.css']
})
export class TripBookingEditComponent implements OnInit {
  tripbooking!:TripBooking;
  constructor(private tripservice:TripBookingService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 0;
    this.tripservice.getTripById(+id).subscribe( tripbooking => {
      this.tripbooking=tripbooking;
    })
  }

  onSubmit(){
    this.tripservice.updateTrip(this.tripbooking.id);
    this.router.navigate(['triplist']);
  }

}
