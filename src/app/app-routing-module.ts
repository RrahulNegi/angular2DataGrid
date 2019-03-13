import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {EmployeeManagmentComponent} from './employee-managment/employee-managment.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-managment-form', pathMatch: 'full' },
  { path: 'employee-managment-form', component: EmployeeManagmentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
