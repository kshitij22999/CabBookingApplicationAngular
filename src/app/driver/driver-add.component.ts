import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  driver! : Driver;
  addForm! : FormGroup;

  constructor( private formBuilder : FormBuilder ,
    private driverService : DriverService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
           
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      id: this.driver.id,
      mobileNumber: this.driver.mobileNo,
      email:this.driver.email,
      driverName : this.driver.driverName,
      address:this.driver.address,
      tripBooking:this.driver.tripBookings,
      accountStatus:this.driver.accountStatus,
      
 })
  }

  addDriver(addForm: any) : void {
  this.driverService.addDriver(this.driver).
    subscribe(data =>{console.log(data);
    })
  }

  onSubmit() : void {

  }
}
