import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  ngOnInit() : void{
  }

  addDriver(addForm: NgForm) : void {
  this.driverService.addDriver(this.driver).
    subscribe(data =>{console.log(data);
    })
  }

  onSubmit(addForm : NgForm){
    console.log(addForm.value)
  }
}
