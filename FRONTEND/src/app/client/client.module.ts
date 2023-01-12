import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComposantLoginComponent } from './composant-login/composant-login.component';
import { ComposantFormComponent } from './composant-form/composant-form.component';
import { ComposantRecapComponent } from './composant-recap/composant-recap.component';


const routes: Routes = [
  { path: 'login', component: ComposantLoginComponent },
  { path: 'form', component: ComposantFormComponent },
  {path:'recap', component: ComposantRecapComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes),
  ]
})
export class ClientModule { }
