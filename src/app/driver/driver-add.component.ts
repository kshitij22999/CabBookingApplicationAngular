import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  driver! : Driver;

  constructor( private driverService : DriverService) { }

  ngOnInit(): void {
  }

  addDriver(form1 : any) : void {
    console.log("in add Drivers",form1.value)

    this.driverService.addDriver(this.driver).
    subscribe(data =>{console.log(data);
    })
  }
}
