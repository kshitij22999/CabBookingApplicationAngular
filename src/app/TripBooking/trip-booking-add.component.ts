import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private tripbookingservice:TripBookingService,private formBuilder : FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      fromLocation:['',Validators.required],
      toLocation:['',Validators.required],
      carType:['']
    })
  }

  createTripBooking(form1: any):void{
    console.log(form1.value)
    
  }

  onSubmit(){
    this.tripbookingservice.createTripBooking(this.addForm.value).
    subscribe( data =>{
      this.tripBooking=data;
      console.log(data);
    })
    this.router.navigate(['tripbooking','triplist']);
  }

}
