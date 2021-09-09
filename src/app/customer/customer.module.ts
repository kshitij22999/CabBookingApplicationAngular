import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerAddComponent } from './customer-add.component';
import { CustomerBookingComponent } from './customer-booking.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerDetailsComponent
  ],
})
export class CustomerModule { }
