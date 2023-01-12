import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddFruit, DeleteFruit } from '../actions/fruit-action';
import { FruitStateModel } from './fruit-state-model';
@State<FruitStateModel>({
  name: 'fruits',
  defaults: {
    fruits: [],
  },
})
@Injectable()
export class FruitState {
  @Selector()
  static getNbFruits(state: FruitStateModel) {
    return state.fruits.length;
  }
  @Selector()
  static getFruitList(state: FruitStateModel) {
    return state.fruits;
  }

  @Action(AddFruit)
  add(
    { getState, patchState }: StateContext<FruitStateModel>,
    { payload }: AddFruit
  ) {
    const state = getState();
    patchState({
      fruits: [...state.fruits, payload],
    });
  }

  @Action(DeleteFruit)
  delete(
    { getState, patchState }: StateContext<FruitStateModel>,
    { payload }: DeleteFruit
  ) {
    const state = getState();
    patchState({
      fruits:
        state.fruits.filter((fruit) => fruit === payload).length === 1
          ? state.fruits.filter((fruit) => fruit !== payload)
          : state.fruits.filter(
            (_, idx) =>
              idx !==
              state.fruits.findIndex((fruitFind) => fruitFind === payload)
          ),
    });
  }
}

