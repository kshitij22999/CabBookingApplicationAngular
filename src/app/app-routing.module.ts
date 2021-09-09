import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabModule } from './cab/cab.module';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { DriverRoutingModule } from './driver/driver-routing.module';
import { TripBookingModule } from './TripBooking/trip-booking.module';

const routes: Routes = [
  {path:'customer',component:CustomerRoutingModule},
  {path:'cab',component:CabModule},
  {path:'driver',component:DriverRoutingModule},
  {path:'tripbooking',component:TripBookingModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
