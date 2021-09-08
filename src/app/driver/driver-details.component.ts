import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  
  id: number = 0;
  driver!: Driver;

  constructor(private driverService  :DriverService,
    private router : ActivatedRoute,
    private route : Router) { }

  ngOnInit(): void {

    this.driver = new Driver();
    this.id = this.router.snapshot.params['id'];  

    this.driverService.getDriverById(this.id).subscribe(data =>{
      console.log(data)
      this.driver=data;
    }, error => console.log(error));
    
  }

  back(){
    this.route.navigate(['list']);
  }
}

