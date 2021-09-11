import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cab, carType } from '../cab/cab';
import { Address } from '../customer/address';
import { Role } from '../register/role';
import { TripBooking } from '../TripBooking/tripbooking';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  roles : Role = {
    id : 2,
    name : 'DRIVER',
    description : 'DRIVER'
  }

  cab : Cab = {
    cabId: 0,
    carType : carType.Indigo,
    perKmRate: 0,
    filter: function (): Cab {
      throw new Error('Function not implemented.');
    }
  }

  address : Address = {
    addr : '',
    city : '',
    state : '',
    pincode : ''
  }

  driver : Driver = {
    username: '',
    message: '',
    status: 0,

    id: 0,
    password: '',
    cab: this.cab,
    driverName: '',
    rating: '',
    lisenceNo: '',
    tripBookings: new TripBooking,
    mobileNumber: '',
    address: this.address,
    email: '',
    vaccinationStatus: 0,
    availabilityStaus: 0,
    accountStatus: 0,
    filter: function (arg0: (u: any) => boolean): Driver {
      throw new Error('Function not implemented.');
    },
    roles: this.roles
  }
  addForm! : FormGroup;

  constructor( private driverService : DriverService,
    private router :Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() : void{
    this.addForm = this.formBuilder.group({
           
      username:['',Validators.required],
      password:['',Validators.required],
      roles: this.roles,
      id:this.driver.id,
      mobileNumber:this.driver.mobileNumber,
      lisenceNo : this.driver.lisenceNo,
      driverName : this.driver.driverName,
      rating : this.driver.rating,
      email:this.driver.email,
      customerName:this.driver.driverName,
      address:this.driver.address,
      tripBooking:this.driver.tripBookings,
      accountStatus:this.driver.accountStatus,
      cab : this.cab
      
 })
  
  }

  onSubmit() {
    console.log(this.addForm.value +"from onSubmit of add driver component")
    this.driverService.addDriver(this.addForm.value).subscribe(
      (data)=>{this.driver=data ;
      console.log(data) },
      (err: string)=>console.log(err)
    )}
  
  onBack() : void{
    this.router.navigate(['/drivers/list'])
  }
}
