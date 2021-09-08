import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from "./customer-add.component"
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerListComponent } from "./customer-list.component"

const routes:Routes = [
    {path :'list' , component : CustomerListComponent},
    {path : 'add' , component : CustomerAddComponent},
    {path : 'edit', component: CustomerEditComponent},
    {path : 'details', component: CustomerDetailsComponent},
    {path : ' ' , redirectTo :'list' , pathMatch : 'full'},
    {path : '**' , redirectTo : 'list' , pathMatch : 'full'}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule{ }