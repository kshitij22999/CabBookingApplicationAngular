import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list.component';
import { AdminDetailsComponent } from './admin-details.component';
import { AdminEditComponent } from './admin-edit.component';
import { AdminAddComponent } from './admin-add.component';
import { AdminMenuComponent } from './admin-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminListComponent,
    AdminDetailsComponent,
    AdminEditComponent,
    AdminAddComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    AdminAddComponent,
    AdminDetailsComponent,
    AdminListComponent,
    AdminEditComponent,
    AdminMenuComponent
  ],
})

export class AdminModule { }
