import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

const routes: Routes = [
  { path:'basic', component: BasicFormComponent },
  { path:'contact', component: ContactFormComponent },
  { path:'create', component: CreateEmployeeComponent },
  { path:'hero', component: HeroFormComponent },

  { path:'', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
