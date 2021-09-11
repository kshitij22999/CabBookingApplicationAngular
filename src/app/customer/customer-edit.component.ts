import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer!:Customer;
  editForm!:FormGroup;
  
  constructor(private formBuilder: FormBuilder,private customerservice:CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      id:this.customer.id,
      mobileNumber:this.customer.mobileNumber,
      email:this.customer.email,
      customerName:this.customer.customerName,
      address:this.customer.address,
      tripBooking:this.customer.tripBooking,
      accountStatus:this.customer.accountStatus
    })
    
  }
  onSubmit(){
    this.customerservice.updateCustomer(this.editForm.value)
    .subscribe(data => {
      if(data.status === 200) {
        alert('Customer updated successfully.');
      this.router.navigate(['customerlist']);
     }
     else{
       alert(data.message);
     }
    },
    error => {
      alert(error);
    });
  } 
  onBack():void{
    this.router.navigate(['/customers/list']);
  }


}
