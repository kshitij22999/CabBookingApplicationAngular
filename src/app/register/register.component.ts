import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../customer/address';
import { HttpClientService } from '../service/httpclient.service';
import { Role } from './role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  role:Role={
    id:0,
    name:'',
    description:''
  };
  address:Address={
    addr:'',
    city:'',
    state:'',
    pincode:''
  }
  constructor(private router : Router,private formbuilder:FormBuilder,
    private httpservice:HttpClientService) {

     }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      roles:new Array([this.role]),
      address:this.address
    });
  }


  onSubmit(){
    console.log(this.registerForm.value);
    if(this.registerForm.value.roles[0].id==1){
        console.log('i am admin');
        this.httpservice.createAdmin(this.registerForm.value).subscribe(
          data=>{
            console.log(data);
            this.router.navigate(['login']);
          })
      }
      else if(this.registerForm.value.roles[0].id==2){
        console.log('i am driver');
        this.httpservice.createDriver(this.registerForm.value).subscribe(
          data=>
          {
            console.log(data);
            this.router.navigate(['login']);
          }
          );
      }
      else if(this.registerForm.value.roles[0].id==3){
        console.log('i am customer');
        this.httpservice.createCustomer(this.registerForm.value).subscribe(
          data=>
          {
            console.log(data);
            this.router.navigate(['login']);
          }
          );

      }
    
    }
  }

