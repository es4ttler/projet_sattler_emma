import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DeleteFruit } from 'src/app/core/actions/fruit-action';
import { Fruit } from '../../core/models/Fruit';
import { FruitState } from '../../core/states/fruit-state';

@Component({
  selector: 'app-composant-fruit-list',
  templateUrl: './composant-fruit-list.component.html',
  styleUrls: ['./composant-fruit-list.component.css']
})
export class ComposantFruitListComponent implements OnInit {

  constructor(private store: Store){}
  @Select(FruitState.getFruitList) fruitList$: Observable<Fruit[]> | undefined;
  ngOnInit(): void {
  }

  deleteFromList(fruit : Fruit) {
    this.store.dispatch(new DeleteFruit(fruit));
  }
}
