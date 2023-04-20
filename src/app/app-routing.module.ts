import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { UpdateModuleComponent } from './update-module/update-module.component';
import { DeleteModuleComponent } from './delete-module/delete-module.component';
import { AlldataModuleComponent } from './alldata-module/alldata-module.component';

const routes: Routes = [
  {component:AdminModuleComponent,path:'admin'},
  {component:AddModuleComponent,path:'admin/add'},
  {component:UpdateModuleComponent, path:'admin/update'},
  {component:DeleteModuleComponent, path:'admin/delete'},
  {component:AlldataModuleComponent,path:'admin/alldata'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
