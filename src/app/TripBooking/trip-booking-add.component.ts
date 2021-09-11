import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cab, carType } from '../cab/cab';
import { Address } from '../customer/address';
import { Customer } from '../customer/customer';
import { TripBooking } from './tripbooking';
import { TripBookingService } from './tripbooking.service';

@Component({
  selector: 'trip-booking-add',
  templateUrl: './trip-booking-add.component.html',
  styleUrls: ['./trip-booking-add.component.css']
})
export class TripBookingAddComponent implements OnInit {
  tripBooking!:TripBooking;
  addForm!:FormGroup;
  username!:string;
  customer!:Customer;
  constructor(private tripbookingservice:TripBookingService,private formBuilder : FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.tripbookingservice.getCustomerByUsername(sessionStorage.getItem('username')||'').subscribe(
      data=>{
        this.customer=data;
      console.log(data)
    });
    console.log(this.customer);
    this.addForm = this.formBuilder.group({
      fromLocation:['',Validators.required],
      toLocation:['',Validators.required],
      distanceInKm:['',Validators.required],
      customer:this.customer
    });
    
  }

  

  onSubmit(){
    this.addForm.value.customer=this.customer;
    this.tripbookingservice.createTripBooking(this.addForm.value).
    subscribe( data =>{
      this.tripBooking=data;
      console.log(data);
    })
    this.router.navigate(['tripbooking','triplist']);
  }

}
