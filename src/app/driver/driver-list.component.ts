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

  constructor(private driverService: DriverService,
    private router : Router) {

  }

  ngOnInit(): void {
    this.driverService.getAllDrivers().subscribe
      ({
        next: driverlist => {
          this.driverlist = driverlist;
        }
      })
  }

  addDriver() : void  {
    this.router.navigate(['add']);
  }


}
