import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list.component';
import { DriverDetailsComponent } from './driver-details.component';
import { DriverEditComponent } from './driver-edit.component';
import { DriverAddComponent } from './driver-add.component';



@NgModule({
  declarations: [
    DriverListComponent,
    DriverDetailsComponent,
    DriverEditComponent,
    DriverAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DriverModule { }
