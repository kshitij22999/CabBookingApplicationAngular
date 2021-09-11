import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver/driver';
import { DriverService } from '../driver/driver.service';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'not-allocated-trip-list',
  templateUrl: './not-allocated-trip-list.component.html',
  styleUrls: ['./not-allocated-trip-list.component.css']
})
export class NotAllocatedTripListComponent implements OnInit {
  notAllocatedList:TripBooking[]=[]
  driver!:Driver;
  constructor(private tripbookingservice:TripBookingService,
    private driverservice:DriverService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.driverservice.getDriverByUsername(sessionStorage.getItem('username')||'').subscribe((data)=>{
      this.driver=data;
      console.log(data);
    })
    this.tripbookingservice.getNotAllocatedTrips().subscribe({
      next:notAllocatedList =>{
        this.notAllocatedList=notAllocatedList;
      }
    })
  }

  async acceptTrip(id:number){
    this.tripbookingservice.acceptTrip(id,this.driver).subscribe(data => console.log(data));
    this.router.navigate(['tripbooking','bill',id]);
  }



}
