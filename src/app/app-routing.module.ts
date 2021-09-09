import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
<<<<<<< HEAD
  {path : 'register' , component : RegisterComponent}
];


=======
  {path : 'register' , component : RegisterComponent},
  {
    path : 'tripbooking' , 
  loadChildren:()=>
  import('./TripBooking/tripbooking-routing.module').then(m=>m.TripbookingRoutingModule)
},
  {
    path : 'driver' , 
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
>>>>>>> 69df1dd6e6a40b4a42bb136cf224645329e3b6a0

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
