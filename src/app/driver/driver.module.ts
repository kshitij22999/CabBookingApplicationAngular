import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list.component';
import { DriverDetailsComponent } from './driver-details.component';
import { DriverEditComponent } from './driver-edit.component';
import { DriverAddComponent } from './driver-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    RouterModule
  ],
  exports : [DriverListComponent,
  DriverAddComponent,
DriverEditComponent]
})
 
export class DriverModule { }
