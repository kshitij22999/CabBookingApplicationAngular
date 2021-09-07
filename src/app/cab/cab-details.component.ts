import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  editForm!:FormGroup;
  cabId:number=0;
 
constructor(private _ActivatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private cabservice: CabService) { }
 

  ngOnInit(): void {
  }

}
