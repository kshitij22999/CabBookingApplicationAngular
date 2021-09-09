import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabDetailsComponent } from './cab-details.component';
import { CabEditComponent } from './cab-edit.component';
import { CabAddComponent } from './cab-add.component';
import { CabListComponent } from './cab-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CabListComponent,
    CabDetailsComponent,
    CabEditComponent,
    CabAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],

  exports:[
    CabListComponent,
    CabAddComponent,
    CabEditComponent,
    CabDetailsComponent

  ]
})
export class CabModule { }
