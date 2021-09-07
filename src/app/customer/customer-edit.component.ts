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
  id!:number;

  constructor(private formBuilder: FormBuilder,private customerservice:CustomerService,private router: Router) { }

  ngOnInit(): void {
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
    this.customerservice.viewCustomer(this.id)
    .subscribe(data => {this.editForm.setValue(data);console.log(this.customer);
    });
  }
  
onSubmit() {
  console.log(this.editForm.value +"from onSubmit of edit customer component")
  this.customerservice.updateCustomer(this.editForm.value).subscribe(
      data => {this.customer =data;this.router.navigate(['customers'])},
      (err)=>{console.log(err)}
       
    )}
  


}
