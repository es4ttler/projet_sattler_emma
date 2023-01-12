import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddFruit } from 'src/app/core/actions/fruit-action';
import { Fruit } from 'src/app/core/models/Fruit';
import { CatalogService } from 'src/app/core/services/CatalogService/catalog.service';

@Component({
  selector: 'app-composant-details',
  templateUrl: './composant-details.component.html',
  styleUrls: ['./composant-details.component.css']
})
export class ComposantDetailsComponent implements OnInit {

  fruit: Fruit | undefined;
  constructor(private catalogService: CatalogService, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.catalogService.getAll().subscribe(
      data => {
        this.fruit = data.find(p => p.id == this.route.snapshot.params['id']);
      }
    );
  }

  ajouterPanier(fruit: Fruit): void{
    this.store.dispatch(new AddFruit(fruit));
  }

}
