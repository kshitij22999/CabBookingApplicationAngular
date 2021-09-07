import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerAddComponent } from './customer-add.component';
import { CustomerBookingComponent } from './customer-booking.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerAddComponent,
    CustomerBookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[

  ]
})
export class CustomerModule { }
