import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { TripBooking } from '../TripBooking/tripbooking';
import {Customer} from './customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  [x : string]: any;
  baseUrl:string = "http://localhost:9190/project/rest/api"
  constructor(private http:HttpClient) { }
 
  public insertCustomer(customer:Customer){
    return this.http.post<Customer>(`${this.baseUrl}/customers/insert`,customer);
  }
  public updateCustomer(customer:Customer){
    return this.http.put<Customer>(`${this.baseUrl}/customers/update/${customer.id}`,customer);
  }
  public viewCustomer(id:number):Observable<Customer>{
    console.log("in service class")
    return this.http.get<Customer>(`${this.baseUrl}/customers/{customerId}`);
 
  }
  public viewCustomers(){
    return this.http.get<Customer[]>(`${this.baseUrl}/customers`);
   
 }
 public deleteCustomer(customer:Customer){
    console.log("in service class")
    return this.http.delete<Customer>(`${this.baseUrl}/customers/delete`);
 
  }
  
}