import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
 
constructor(private _ActivatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private customerservice: CustomerService) { }
 
ngOnInit() {
 
  /* this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this.customerservice.viewCustomer(this.id).subscribe(
      (data)=>{console.log(data);this.customer=data;
        this.editForm = this.formBuilder.group({
          id: this.customer.id,
          username: this.customer.username,
          password: this.customer.password,
          role:this.customer.role,
          mobileNumber:this.customer.mobileNumber,
          email:this.customer.email,
          customerName:this.customer.customerName,
          address:this.customer.address,
          tripBooking:this.customer.tripBooking,
          accountStatus:this.customer.accountStatus,

          
        });},
    ); */
    
         
      
    }
  
}