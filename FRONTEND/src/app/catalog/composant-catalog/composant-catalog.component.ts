import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AddFruit } from 'src/app/core/actions/fruit-action';
import { Fruit } from 'src/app/core/models/Fruit';
import { CatalogService } from 'src/app/core/services/CatalogService/catalog.service';

@Component({
  selector: 'app-composant-catalog',
  templateUrl: './composant-catalog.component.html',
  styleUrls: ['./composant-catalog.component.css']
})
export class ComposantCatalogComponent implements OnInit {
  
  catalog: Fruit[] = [];
  subscription: Subscription;
  constructor(public catalogService: CatalogService, private store: Store) {
    this.subscription = this.getCatalog();
  }

  ngOnInit(): void {}

  getCatalog(): Subscription {
    return this.catalogService.getAll().subscribe((items) => {
      this.catalog = items;
    });
  }
  updateCatalog(items: Fruit[]) {
    this.catalog = items;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addFruit(fruit: Fruit) {

    this.store.dispatch(new AddFruit(fruit));
  }

}
