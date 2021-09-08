import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverAddComponent } from './driver-add.component';
import { DriverDetailsComponent } from './driver-details.component';
import { DriverEditComponent } from './driver-edit.component';
import { DriverListComponent } from './driver-list.component';

const routes: Routes = [
  {path : 'list' , component : DriverListComponent},
  {path : 'add' , component : DriverAddComponent},
  {path : 'edit' , component : DriverEditComponent },
  {path : 'details' , component : DriverDetailsComponent},
  {path : ' ' , redirectTo : 'list' , pathMatch : 'full'},
  {path : '**' , redirectTo : 'list' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
