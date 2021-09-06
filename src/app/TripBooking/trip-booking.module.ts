import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripBookingListComponent } from './trip-booking-list.component';
import { TripBookingDetailsComponent } from './trip-booking-details.component';
import { TripBookingEditComponent } from './trip-booking-edit.component';
import { TripBookingAddComponent } from './trip-booking-add.component';
import { TripBookingBillComponent } from './trip-booking-bill.component';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    TripBookingListComponent,
    TripBookingDetailsComponent,
    TripBookingEditComponent,
    TripBookingAddComponent,
    TripBookingBillComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TripBookingModule { }
