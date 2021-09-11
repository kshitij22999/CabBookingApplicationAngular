import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  driverlist!: Driver[];
  driver!: Driver;

  constructor(private driverService: DriverService,
    private router : Router) {

  }

  ngOnInit(): void {
    this.driverService.getAllDrivers().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response: Driver[])
{
    this.driverlist=response;
}

  deleteDriver(driver: Driver): void {
    this.driverService.deleteDriver(driver.id).subscribe(data => {
      console.log("driver deleted")
      this.driver = this.driver.filter(u => u !== driver);
    })
  }

  editDriver(driver: Driver)  : void {
    this.router.navigate(['/edit']);
  }



}
