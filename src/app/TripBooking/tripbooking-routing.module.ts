import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotAllocatedTripListComponent } from "./not-allocated-trip-list.component";
import { TripBookingAddComponent } from "./trip-booking-add.component";
import { TripBookingDetailsComponent } from "./trip-booking-details.component";
import { TripBookingEditComponent } from "./trip-booking-edit.component";
import { TripBookingListComponent } from "./trip-booking-list.component";

const routes: Routes = [
    {path:'triplist', component:TripBookingListComponent},
      {path:'trips', component:NotAllocatedTripListComponent},
      {path:'triplist/:id/edit',component:TripBookingEditComponent},
      {path:'triplist/:id',component:TripBookingDetailsComponent},
      {path:'add',component:TripBookingAddComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TripbookingRoutingModule { }