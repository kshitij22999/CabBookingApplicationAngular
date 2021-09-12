import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'home' , component : HomePageComponent},
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
  },
  {
    path : 'admin' , 
    loadChildren:()=>
  import('./admin/admin-routing.module').then(m=>m.AdminRoutingModule)
  },
  {
    path : 'loader' , 
    component:LoaderComponent
  },
  {path : '' , redirectTo:'home',pathMatch:'full'},
  {path : '**' , redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
} 
