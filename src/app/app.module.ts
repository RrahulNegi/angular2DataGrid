import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AppRoutingModule } from './app-routing-module';
import { EmployeeManagmentComponent } from './employee-managment/employee-managment.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeManagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
