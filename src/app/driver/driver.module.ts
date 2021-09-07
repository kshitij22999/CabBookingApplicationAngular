import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list.component';
import { DriverDetailsComponent } from './driver-details.component';
import { DriverEditComponent } from './driver-edit.component';
import { DriverAddComponent } from './driver-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DriverListComponent,
    DriverDetailsComponent,
    DriverEditComponent,
    DriverAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DriverModule { }
