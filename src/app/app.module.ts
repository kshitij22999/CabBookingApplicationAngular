import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabModule } from './cab/cab.module';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import { TripBookingModule } from './TripBooking/trip-booking.module';
<<<<<<< HEAD
import { FormsModule, NgForm } from '@angular/forms';
=======
import { TripBookingListComponent } from './TripBooking/trip-booking-list.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
>>>>>>> 37724c6e7bb6f3635b59fb791f176c25c0df9a97

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdminModule,
    CabModule,
    CustomerModule,
    DriverModule,
    TripBookingModule,
    NgForm,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
