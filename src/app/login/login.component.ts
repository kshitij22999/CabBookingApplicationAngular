import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


export class JwtResponse{

  JwtToken! : string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  username = ''
  password = ''
  invalidLogin = false
  response!:JwtResponse

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data)
        /* this.response=data.jwtToken;
        console.log("Rseponse" ,this.response,"response ") */
        //this.setValues(data);
        if(sessionStorage.getItem('role')==='Admin'){
          this.router.navigate(['admin']);
        }
        else if(sessionStorage.getItem('role')==='Customer'){
          this.router.navigate(['tripbooking','add']);
        }else{
          this.router.navigate(['tripbooking','trips']);
        }
        
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

  setValues(data:any){
    console.log("in set values",data)
    sessionStorage.setItem('username',this.username);
        sessionStorage.setItem('token',data.token)

      console.log('data set')



  }
}