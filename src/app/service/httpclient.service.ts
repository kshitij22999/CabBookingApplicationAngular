import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../admin/admin';
import { Customer } from '../customer/customer';
import { Driver } from '../driver/driver';




@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl='http://localhost:9191/project/rest/api';
  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
   /*  let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   */  
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
  
   //return this.httpClient.get<Employee[]>(`${this.baseUrl}/employees`,{headers});
  }

 
  public createAdmin(admin:Admin){
    return this.httpClient.post<Admin>(`http://localhost:9191/project/api/admin/register`,admin);
  }

  public createCustomer(customer:Customer){
    return this.httpClient.post<Customer>(`${this.baseUrl}/customers/register`,customer);
  }

  public createDriver(driver:Driver){
    return this.httpClient.post<Driver>(`${this.baseUrl}/drivers/register`,driver);
  }
  
}