import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cab } from '../cab/cab';
import { TripBooking } from '../TripBooking/tripbooking';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  driver : Driver = {
    username: '',
    message: '',
    status: 0,

    id: 0,
    password: '',
    cab: new Cab,
    driverName: '',
    rating: '',
    role: '',
    lisenceNo: 0,
    tripBookings: new TripBooking,
    mobileNo: 0,
    address: '',
    email: '',
    vaccinationStatus: 0,
    availabilityStaus: 0,
    accountStatus: 0,
    filter: function (arg0: (u: any) => boolean): Driver {
      throw new Error('Function not implemented.');
    }
  }

  constructor( private driverService : DriverService,
    private router :Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() : void{
  
  }

  addDriver(form1 : any): void {
    console.log("in add Driver",form1.value)
    
    
    this.driverService.addDriver(form1.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['/drivers/list'])
          
        });

  };
  
  onBack() : void{
    this.router.navigate(['/drivers/list'])
  }
}
