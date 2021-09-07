import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list.component';
import { DriverDetailsComponent } from './driver-details.component';
import { DriverEditComponent } from './driver-edit.component';
import { DriverAddComponent } from './driver-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DriverListComponent,
    DriverDetailsComponent,
    DriverEditComponent,
    DriverAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path : 'list' , component : DriverListComponent},
      {path : 'add' , component : DriverAddComponent},
      {path : 'edit' , component : DriverEditComponent },
      {path : 'details' , component : DriverDetailsComponent},
      {path : ' ' , redirectTo : 'list' , pathMatch : 'full'},
      {path : '**' , redirectTo : 'list' , pathMatch : 'full'}
    ])
  ],
})
 
export class DriverModule { }
