import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComposantCatalogComponent } from './composant-catalog/composant-catalog.component';
import { ComposantDetailsComponent } from './composant-details/composant-details.component';
import { ComposantFruitListComponent } from './composant-fruit-list/composant-fruit-list.component';

const routes: Routes = [
  {path: 'kart', component: ComposantFruitListComponent},
  {path: 'catalog', component: ComposantCatalogComponent},
  {path: ':id', component: ComposantDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
  ]
})
export class CatalogModule { }
