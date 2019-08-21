import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  { path:'basic', component: BasicFormComponent },
  { path:'contact', component: ContactFormComponent },
  { path:'employee', component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
