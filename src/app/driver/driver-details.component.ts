import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  
  pageTitle = "Driver Details";
  driver!: Driver;
  constructor() { }

  ngOnInit(): void {
  }

}
