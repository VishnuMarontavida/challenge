import {
    loadPizzaOrdersSuccess
} from '../actions/pizza-order.action';
import { createReducer, on, State } from '@ngrx/store';
import { initialState } from '../state/pizza-order.state';

const _orderReducer = createReducer(initialState,
    on(loadPizzaOrdersSuccess,(state, action) => ({
			...state,
			OrderList: action.OrderList
		})
	),
);

export function pizzaOrdersReducer(state: any, action: any) {
    return _orderReducer(state, action);
}
