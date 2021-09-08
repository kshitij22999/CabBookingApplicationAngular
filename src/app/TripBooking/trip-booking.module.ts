import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripBookingListComponent } from './trip-booking-list.component';
import { TripBookingDetailsComponent } from './trip-booking-details.component';
import { TripBookingEditComponent } from './trip-booking-edit.component';
import { TripBookingAddComponent } from './trip-booking-add.component';
import { TripBookingBillComponent } from './trip-booking-bill.component';
import { FormsModule } from '@angular/forms';
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
    RouterModule.forChild([
      {path:'triplist', component:TripBookingListComponent},
      {path:'trips', component:NotAllocatedTripListComponent},
      {path:':id/edit',component:TripBookingEditComponent},
      {path:':id',component:TripBookingDetailsComponent},
      {path:'', component:TripBookingListComponent},
      {path:'**', component:TripBookingListComponent}
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
