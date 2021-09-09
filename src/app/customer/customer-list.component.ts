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
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.customerservice.viewCustomers().subscribe(
      {
        next: customerlist => {
          this.customerlist = customerlist;
        }
      }
 
    )
  }
  editCustomer(customer : any) : void {
    this.router.navigate(['/edit']);
  }
  insertCustomer():void{
    this.router.navigate(['/add']);
  }
  
  

}
