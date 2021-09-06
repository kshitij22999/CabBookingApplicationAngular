import { Component, OnInit } from '@angular/core';
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
    this.driverService.addDriver(this.driver).subscribe
    (data =>{console.log(data);
    })
  }
}
