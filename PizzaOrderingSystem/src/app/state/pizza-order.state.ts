import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Pizza } from './../models/Pizza';

export interface PizzaOrdersState extends EntityState<Pizza> {
  count: number;
}

export const PizzaOrdersAdapter = createEntityAdapter<Pizza>({
//   sortComparer: sortByName,
});

export const initialState: PizzaOrdersState = PizzaOrdersAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Pizza, b: Pizza): number {
  const compare = a.Crust.localeCompare(b.Crust);
  if (compare > 0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}
