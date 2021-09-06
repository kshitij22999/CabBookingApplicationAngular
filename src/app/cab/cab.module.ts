import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabDetailsComponent } from './cab-details.component';
import { CabEditComponent } from './cab-edit.component';
import { CabAddComponent } from './cab-add.component';
import { CabListComponent } from './cab-list.component';



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
