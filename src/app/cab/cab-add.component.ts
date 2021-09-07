import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cab } from './cab';
import { CabService } from './cab.service';

@Component({
  selector: 'app-cab-add',
  templateUrl: './cab-add.component.html',
  styleUrls: ['./cab-add.component.css']
})
export class CabAddComponent implements OnInit {

  cab!:Cab;
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private cabservice:CabService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
           
     
      cabId: this.cab.cabId,
      carType: this.cab.carType,
      perKmRate: this.cab.perKmRate
      
 })
}
addCab(form1:any):void{
  this.cabservice.addCab(this.cab).subscribe(data =>{console.log(data)
  })
 }
 
   

}
