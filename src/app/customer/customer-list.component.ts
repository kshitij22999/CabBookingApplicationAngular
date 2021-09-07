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
  customer!:Customer;
  id!:number;
  constructor(private _customerservice:CustomerService,private _ActivatedRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this._customerservice.viewCustomers().subscribe(
      (data)=>{this.customers = data;console.log(this.customers);},
 
    )
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this._customerservice.viewCustomer(this.id).subscribe(
      (data)=>{console.log(data);this.customer=data},
      (err)=>console.log(err)
    );
    }
      onBack():void{
        this._router.navigate(['customers'])  
  }
  
  

}
