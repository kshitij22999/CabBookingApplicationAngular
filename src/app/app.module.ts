import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabModule } from './cab/cab.module';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import { TripBookingModule } from './TripBooking/trip-booking.module';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
