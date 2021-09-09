import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtResponse } from '../login/login.component';

export class User{

  username! :string;
  password! :string;
  constructor(
    public status:string,
     ) {}
  
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user!:User;
private baseUrl='http://localhost:9191/project/rest/api'

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username:string , password : string):Observable<any>{
       
       console.log('in authentication service authenticate method',username)
     // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
      return this.httpClient.post<any>(`${this.baseUrl}/token/generate-token`,{username,password} )
      .pipe(map(
        userData => {
         sessionStorage.setItem('username',username);
         let tokenStr= 'Bearer '+userData.token;
         sessionStorage.setItem('token', tokenStr);
         return userData;
        }
      ));}
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
   // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}