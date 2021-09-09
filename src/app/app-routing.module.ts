import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
  {path : 'register' , component : RegisterComponent},
  {
    path : 'tripbooking' , 
  loadChildren:()=>
  import('./TripBooking/tripbooking-routing.module').then(m=>m.TripbookingRoutingModule)
 },
 {
    path : 'drivers' , 
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



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
} 
