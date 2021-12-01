import {
    loadPizzaOrdersSuccess
} from '../actions/pizza-order.action';
import { createReducer, on } from '@ngrx/store';
import { initialState, PizzaOrdersAdapter } from '../state/pizza-order.state';

const ordersReducer = createReducer(
    initialState,
    // on(loadPizzaOrdersSuccess, (state, action) => {
    //     return [{
    //         ...state,
    //         count: state.count + 1,
    //     }];
    // })
);

export function pizzaOrdersReducer(state: any, action: any) {
    return ordersReducer(state, action);
}
