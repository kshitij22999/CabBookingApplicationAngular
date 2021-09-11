import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcceptResolverService } from "./accept-resolver.service";

import { NotAllocatedTripListComponent } from "./not-allocated-trip-list.component";
import { TripBookingAddComponent } from "./trip-booking-add.component";
import { TripBookingBillComponent } from "./trip-booking-bill.component";
import { TripBookingDetailsComponent } from "./trip-booking-details.component";
import { TripBookingEditComponent } from "./trip-booking-edit.component";
import { TripBookingListComponent } from "./trip-booking-list.component";

const routes: Routes = [
    {path:'triplist', component:TripBookingListComponent},
      {path:'trips', component:NotAllocatedTripListComponent},
      {path:'triplist/:id/edit',component:TripBookingEditComponent},
      {path:'triplist/:id',component:TripBookingDetailsComponent},
      {path:'add',component:TripBookingAddComponent},
      {
        path:'bill/:id',
        component:TripBookingBillComponent,
        resolve:{trip:AcceptResolverService}
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TripbookingRoutingModule { }