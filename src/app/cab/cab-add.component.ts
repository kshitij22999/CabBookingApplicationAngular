import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor( private cabService : CabService,
    private router :Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
           
     
      cabId: this.cab.cabId,
      carType: this.cab.carType,
      perKmRate: this.cab.perKmRate
      
 })
}
 
onSubmit() {
  this.cabService.addCab(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['list-user']);
    });
}
}