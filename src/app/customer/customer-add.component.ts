import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customer!:Customer;
  addForm!: FormGroup;
  id!:number;
  constructor(private formBuilder: FormBuilder,private customerservice:CustomerService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
           
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
onSubmit() {
  console.log(this.addForm.value +"from onSubmit of add customer component")
  this.customerservice.insertCustomer(this.addForm.value).subscribe(
    data=>this.customer=data,
    err=>console.log(err)
  )}

}
