import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
  driver!: Driver;
  editForm! : FormGroup

  constructor(private formBuilder: FormBuilder,
    private driverService: DriverService,
    private router : Router) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({

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

  deleteDriver(driver: Driver): void {
    this.driverService.deleteDriver(driver.id).subscribe(data => {
      console.log("driver deleted")
      this.driver = this.driver.filter(u => u !== driver);
    })
  }

  onSubmit(){
    this.driverService.updateDriver(this.editForm.value)
    .subscribe(data => {
      if(data.status === 200) {
        alert('Driver updated successfully.');
      this.router.navigate(['driverlist']);
     }
     else{
       alert(data.message);
     }
    },
    error => {
      alert(error);
    });
  }
}
