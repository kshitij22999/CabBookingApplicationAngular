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
 
  constructor(private cabService  :CabService,
    private router : ActivatedRoute,
    private route : Router) { }

    ngOnInit(): void {

      this.cab= new Cab();
      this.cabId = this.router.snapshot.params['cabId'];  
  
      this.cabService.getAllCabs().subscribe(data =>{
        console.log(data)
        this.cab=data;
      }, error => console.log(error));
      
    }
back(){
  this.route.navigate(['list']);
}
  
}
