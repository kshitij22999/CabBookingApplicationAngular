import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
<<<<<<< HEAD
=======

>>>>>>> 7df1f0a2b307694b7b93f76dcaff89aca17956a5
  {path : 'register' , component : RegisterComponent},
  {
    path : 'tripbooking' , 
  loadChildren:()=>
  import('./TripBooking/tripbooking-routing.module').then(m=>m.TripbookingRoutingModule)
<<<<<<< HEAD
},
  {
    path : 'drivers' , 
=======
 },
 {
    path : 'driver' , 
>>>>>>> 7df1f0a2b307694b7b93f76dcaff89aca17956a5
    loadChildren:()=>
  import('./driver/driver-routing.module').then(m=>m.DriverRoutingModule)
 },
 {
    path : 'customer' , 
    loadChildren:()=>
  import('./customer/customer-routing.module').then(m=>m.CustomerRoutingModule)
 },
 {
    path : 'cab' , 
    loadChildren:()=>
  import('./cab/cab-routing.module').then(m=>m.CabRoutingModule)
 }
];
<<<<<<< HEAD
=======


>>>>>>> 7df1f0a2b307694b7b93f76dcaff89aca17956a5

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
} 
