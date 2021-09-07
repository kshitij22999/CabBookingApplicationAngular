import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
  driver!: Driver;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
  }

  deleteDriver(driver: Driver): void {
    this.driverService.deleteDriver(driver).subscribe(data => {
      console.log("driver deleted")
      this.driver = this.driver.filter(u => u !== driver);
    })
  }
}