import { Fruit } from "../models/Fruit";


export class AddFruit{
  static readonly type = '[Fruit] Add';

  constructor(public payload: Fruit) {}
}

export class DeleteFruit{
  static readonly type = '[Fruit] Delete';

  constructor(public payload: Fruit) {}
}