import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Driver } from '../driver/driver';
import { CabAddComponent } from './cab-add.component';
import { CabDetailsComponent } from './cab-details.component';
import { CabEditComponent } from './cab-edit.component';
import { CabListComponent } from './cab-list.component';

const routes: Routes = [
    {path : 'list' , component : CabListComponent},
    {path : 'add' , component : CabAddComponent},
    {path : 'edit' , component : CabEditComponent },
    {path : 'details' , component :CabDetailsComponent},
    {path : ' ' , redirectTo : 'list' , pathMatch : 'full'},
    {path : '**' , redirectTo : 'list' , pathMatch : 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CabRoutingModule { }

  