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
  id:number=0;
 
constructor(private router: ActivatedRoute,
  private customerservice: CustomerService,
  private route : Router) { }
 
ngOnInit() {
  this.customer=new Customer();
  this.id = this.router.snapshot.params['id'];
  this.customerservice.viewCustomer(this.id).subscribe(data => {
    console.log(data)
    this.customer=data;
  },error => console.log(error));
}
back(){
  this.route.navigate(['list']);
}

}