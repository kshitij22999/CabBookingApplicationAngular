import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder,private router: Router,private customerservice:CustomerService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
           
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
      
 })
}
  insertCustomer(form1:any):void{
    this.customerservice.insertCustomer(this.customer).subscribe(data =>{console.log(data)
    })
   }

}
