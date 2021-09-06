import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { TripBooking } from '../TripBooking/tripbooking';
import {Customer} from './customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
public baseUrl:string = "http://localhost:9191/project/rest/api"
  constructor(private http:HttpClient) { }
 
  insertCustomer(customer:Customer):Observable<Customer>{
    return <Observable<Customer>>this.http.post(this.baseUrl+"/customers/insert",customer);
  }
  /* viewCustomers():Observable<Customer[]>{
     return  <Observable<Customer[]>>this.http.get(this.baseUrl + "/customers")
    
  }
 
  viewCustomer(id:number):Observable<Customer>{
    console.log("in service class")
    return <Observable<Customer>>this.http.get(this.baseUrl+"/customers/{customerId}"+id);
 
  }
 
  deleteCustomer(customer:Customer):Observable<Customer>{
    console.log("in service class")
    return <Observable<Customer>>this.http.delete(this.baseUrl+"/customers/delete");
 
  }
  updateCustomer(customer:Customer):Observable<Customer>{
    return <Observable<Customer>>this.http.put(this.baseUrl+"/customers/update",customer);
  }
 
  
  addUnassignedTrip(id:number,tripbooking:TripBooking):Observable<TripBooking>{
      return <Observable<TripBooking>>this.http.post(this.baseUrl+"/customers/book/{id}",id);
  }
  checkStatusOfBooking(id:number):Observable<TripBooking>{
      console.log("in service class")
      return <Observable<TripBooking>>this.http.get(this.baseUrl+"/customers/status/{id}"+id);
  }
  registerCustomer(customer:Customer):Observable<Customer>{
      return <Observable<Customer>>this.http.post(this.baseUrl+"/customers/register",customer);
  }
  loginCustomer(customer:Customer):Observable<Customer>{
      return <Observable<Customer>>this.http.put(this.baseUrl+"/customers/login",Customer);
  }
  logoutCustomer(customer:Customer):Observable<Customer>{
    return <Observable<Customer>>this.http.put(this.baseUrl+"/customers/logout",Customer);
} */
}