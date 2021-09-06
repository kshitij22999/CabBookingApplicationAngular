import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerlist!: Customer[];
  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.customerservice.viewCustomers().subscribe({next:customerlist =>{
      this.customerlist=customerlist;
    }
  })
  }

}
