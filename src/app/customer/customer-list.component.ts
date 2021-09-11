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

  customerlist!: Customer[];
  customer!: Customer;
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.customerservice.viewCustomers().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response:Customer[])
  {
    this.customerlist=response;
  }
  deleteCustomer(customer: Customer):void{
    this.customerservice.deleteCustomer(customer).subscribe(data =>{
      console.log("customer deleted")
      this.customer=this.customer.filter(u =>u!==customer);
    })
  }
  editCustomer(customer :Customer) : void {
    this.router.navigate(['/edit']);
  }
  
  
  

}
