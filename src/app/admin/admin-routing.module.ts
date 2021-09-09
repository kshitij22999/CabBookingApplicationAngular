import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminAddComponent } from "./admin-add.component"
import { AdminDetailsComponent } from "./admin-details.component"
import { AdminEditComponent } from "./admin-edit.component"
import { AdminListComponent } from "./admin-list.component"





const routes:Routes=[
    { path: 'list', component: AdminListComponent },
    { path: 'add', component: AdminAddComponent },
    { path: 'edit', component: AdminEditComponent },
    { path: 'details', component: AdminDetailsComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {path: '**',redirectTo: 'list', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule{ }