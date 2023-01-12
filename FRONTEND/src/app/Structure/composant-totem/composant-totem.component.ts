import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FruitState } from 'src/app/core/states/fruit-state';

@Component({
  selector: 'app-composant-totem',
  templateUrl: './composant-totem.component.html',
  styleUrls: ['./composant-totem.component.css']
})
export class ComposantTotemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Select(FruitState.getNbFruits)
  numberProduct$!: Observable<number>;


}
