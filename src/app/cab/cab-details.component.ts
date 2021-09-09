import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cab } from './cab';
import { CabService } from './cab.service';

@Component({
  selector: 'app-cab-details',
  templateUrl: './cab-details.component.html',
  styleUrls: ['./cab-details.component.css']
})
export class CabDetailsComponent implements OnInit {

  cab!:Cab;
  pageTitle!:number;
  editForm!:FormGroup;
  cabId:number=0;
 
constructor(private _ActivatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private cabservice: CabService) { }
 

ngOnInit() {
  this.editForm = this.formBuilder.group({
    id:[''],     
    carType:['',Validators.required],
   
    perKmRate:['',Validators.required],
    
  })
}
viewCab():void{
  this.router.navigate(['cab-edit']);
}
  
}
