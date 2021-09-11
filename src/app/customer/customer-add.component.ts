import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customer!:Customer;
  addForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private customerservice:CustomerService,private router:Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
           
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
onSubmit() {
  console.log(this.addForm.value +"from onSubmit of add customer component")
  this.customerservice.insertCustomer(this.addForm.value).subscribe(
    data=>{this.customer=data},
    err=>console.log(err)
  )}
  onBack():void{
    this.router.navigate(['/customers/list']);
  }

}
