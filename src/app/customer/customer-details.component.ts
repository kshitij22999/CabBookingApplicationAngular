import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer!:Customer;
  editForm!:FormGroup;
  id:number=0;
 
constructor(private formBuilder: FormBuilder,private router: Router, private customerservice: CustomerService) { }
 
ngOnInit() {
  this.editForm = this.formBuilder.group({
    id:[''],     
    username:['',Validators.required],
    password:['',Validators.required],
    role:['',Validators.required],
    mobileNumber:['',Validators.required],
    email:['',Validators.required],
    customerName:['',Validators.required],
    address:['',Validators.required],
    tripBooking:this.customer.tripBooking,
    accountStatus:this.customer.accountStatus
  })
}
viewCustomer():void{
  this.router.navigate(['customer-edit']);
}
  
}