import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripBookingListComponent } from './trip-booking-list.component';
import { TripBookingDetailsComponent } from './trip-booking-details.component';
import { TripBookingEditComponent } from './trip-booking-edit.component';
import { TripBookingAddComponent } from './trip-booking-add.component';
import { TripBookingBillComponent } from './trip-booking-bill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotAllocatedTripListComponent } from './not-allocated-trip-list.component';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TripBookingListComponent,
    TripBookingDetailsComponent,
    TripBookingEditComponent,
    TripBookingAddComponent,
    TripBookingBillComponent,
    NotAllocatedTripListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'triplist', component:TripBookingListComponent},
      {path:'trips', component:NotAllocatedTripListComponent},
      {path:'triplist/:id/edit',component:TripBookingEditComponent},
      {path:'triplist/:id',component:TripBookingDetailsComponent},
      {path:'add',component:TripBookingAddComponent}
    ])
  ],
  exports:[
    TripBookingListComponent,
    TripBookingDetailsComponent,
    TripBookingEditComponent,
    TripBookingAddComponent,
    TripBookingBillComponent,
    NotAllocatedTripListComponent
  ]
})
export class TripBookingModule { }
