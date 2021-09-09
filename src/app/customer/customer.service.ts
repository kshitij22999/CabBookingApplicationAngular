import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { TripBooking } from '../TripBooking/tripbooking';
import {Customer} from './customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
public baseUrl:string = "http://localhost:9190/project/rest/api"
  constructor(private http:HttpClient) { }
 
  insertCustomer(customer:Customer):Observable<Customer>{
    return <Observable<Customer>>this.http.post(`${this.baseUrl}/customers/insert`,customer);
  }
  updateCustomer(customer:Customer):Observable<Object>{
    return this.http.put(`${this.baseUrl}/customers/update`,customer);
  }
  viewCustomer(id:number):Observable<any>{
    console.log("in service class")
    return this.http.get(`${this.baseUrl}/customers/{customerId}`);
 
  }
  viewCustomers():Observable<any>{
    return this.http.get(`${this.baseUrl}/customers`);
   
 }
 deleteCustomer(customer:Customer):Observable<Object>{
    console.log("in service class")
    return this.http.delete(`${this.baseUrl}/customers/delete`);
 
  }
  
}