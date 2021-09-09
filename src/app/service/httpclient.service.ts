import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  public id:string;
    public name:string;
    public designation:string;
    public salary:string;
  
}



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl='http://localhost:9595/project/rest';
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
  
   return this.httpClient.get<Employee[]>(`${this.baseUrl}/employees`,{headers});
  }

  public deleteEmployee(employee) {
    
    return this.httpClient.delete<Employee>(`${this.baseUrl}/employees/${employee.id}`,employee);
  }

  public createEmployee(employee) {
    /* 
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   */
       return this.httpClient.post<Employee>(`${this.baseUrl}/employees`,employee);
  }
}