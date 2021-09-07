import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.customerservice.viewCustomers().subscribe(
      (data)=>{this.customers = data;console.log(this.customers);},
 
    )
  }
  deleteCustomer(customer:Customer):void{
    this.customerservice.deleteCustomer(customer)
    .subscribe(data => {this.customers.filter(u => u!==customer)});
  }
  updateCustomer():void{
    this.router.navigate(['customer-edit']);
  }
  insertCustomer():void{
    this.router.navigate(['customer-add']);
  }
  
  

}
