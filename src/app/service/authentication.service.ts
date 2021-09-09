import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtResponse } from '../login/login.component';

export class User{

  username!:string;
  password!:string;
  constructor(
    public status:string,
     ) {}
  
}

export class UserDetails{
  password!:string;
  username!:string;
  authorities!:Authority[];
  accountNonExpired!:boolean;
  accountNonLocked!:boolean;
  credentialsNonExpired!:boolean;
  enabled!:boolean;

}

export class Authority{
  authority!:string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
user!:User;
userdetails:UserDetails={
  password:'',
  username:'',
  authorities:[],
  accountNonExpired:false,
  accountNonLocked:false,
  credentialsNonExpired:false,
  enabled:false

};
role!:string;
private baseUrl='http://localhost:9191/project'

  constructor(
    private httpClient:HttpClient
  ) { 
     }
  

     authenticate(username:string, password:string):Observable<any>{
       this.loadUser(username).subscribe((data)=>{
         this.role= data.authorities[0].authority;
        });
       console.log('in authentication service authenticate method',username);
     // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
      return this.httpClient.post<any>(`${this.baseUrl}/token/generate-token`,{username,password} )
      .pipe(map(
        userData => {
         sessionStorage.setItem('username',username);
         sessionStorage.setItem('role',this.role);
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

  loadUser(username:string){

    console.log(`${this.baseUrl}/user/username/${username}`);
    return this.httpClient.get<UserDetails>(`${this.baseUrl}/user/username/${username}`);
  }
}