import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabDetailsComponent } from './cab-details.component';
import { CabEditComponent } from './cab-edit.component';
import { CabAddComponent } from './cab-add.component';
import { CabListComponent } from './cab-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



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
    RouterModule.forChild([
      {path : 'list' , component : CabListComponent},
      {path : 'add' , component : CabAddComponent},
      {path : 'edit' , component : CabEditComponent },
      {path : 'details' , component : CabDetailsComponent},
      {path : ' ' , redirectTo : 'list' , pathMatch : 'full'},
      {path : '**' , redirectTo : 'list' , pathMatch : 'full'}
    ])
  ],

  exports:[

  ]
})
export class CabModule { }
