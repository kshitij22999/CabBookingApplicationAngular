import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  driver! : Driver;
  addForm! : FormGroup

  constructor( private driverService : DriverService,
    private router :Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() : void{
    this.addForm = this.formBuilder.group({

      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      id: this.driver.id,
      mobileNumber:this.driver.mobileNo,
      email:this.driver.email,
      Name:this.driver.driverName,
      address:this.driver.address,
      tripBooking : this.driver.tripBookings,
      accountStatus:this.driver.accountStatus

    })
  }

  
  onSubmit() {
    this.driverService.addDriver(this.addForm.value)
      .subscribe( data =>{ this.driver = data},
        err=>console.log(err)
      )
    }
}
