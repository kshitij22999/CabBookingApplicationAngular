import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabListComponent } from './cab-list/cab-list.component';
import { CabDetailsComponent } from './cab-details.component';
import { CabEditComponent } from './cab-edit.component';
import { CabAddComponent } from './cab-add.component';



@NgModule({
  declarations: [
    CabListComponent,
    CabDetailsComponent,
    CabEditComponent,
    CabAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CabModule { }
