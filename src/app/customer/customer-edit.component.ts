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
      id: this.customer.id,
      mobileNumber:this.customer.mobileNumber,
      email:this.customer.email,
      customerName:this.customer.customerName,
      address:this.customer.address,
      tripBooking:this.customer.tripBooking,
      accountStatus:this.customer.accountStatus
    })
  }
  onEdit(){ 
      this.customerservice.deleteCustomer(this.editForm.value).subscribe( data => {console.log("user deleted")
      
    })
  
  }
  
onSubmit() {
  console.log(this.editForm.value +"from onSubmit of edit customer component")
  this.customerservice.updateCustomer(this.editForm.value).subscribe(
      data => {this.customer =data;this.router.navigate(['customers'])},
      (err)=>{console.log(err)}
       
    )}
  


}
