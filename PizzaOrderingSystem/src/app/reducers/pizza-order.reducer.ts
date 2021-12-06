import {
	addOrderFailed,
	addOrderSuccess,
	loadPizzaOrdersSuccess,
	removeMessage,
	removeOrderFailed,
	removeOrderSuccess
} from '../actions/pizza-order.action';
import { createReducer, on, State } from '@ngrx/store';
import { initialState } from '../state/pizza-order.state';
import { Pizza } from '../models/Pizza';

const _orderReducer = createReducer(initialState,
	on(loadPizzaOrdersSuccess, (state, action) => {
		// ...state,
		// OrderList: action.OrderList
		return {
			...state,
			OrderList: action.OrderList,
			SuccessMessageStatus: false,
			LoadingStatus: false,
			Message: '',
		};
	}
	),
	on(addOrderSuccess, (state, action) => {
		return {
			...state,
			OrderList: state.OrderList.slice().concat(action.order),
			SuccessMessageStatus: false,
			LoadingStatus: false,
			Message: 'Order created Successfully.',
		};
	}),
	on(addOrderFailed, (state, action) => {

		return {
			...state,
			orderData: [...state.OrderList, action.message],
			SuccessMessageStatus: false,
			Message: action.message,
			LoadingStatus: false,
			OrderList: state.OrderList
		};
	}),
	on(removeOrderSuccess, (state, action) => {

		var newOrderList: Pizza[] = [];

		state.OrderList.forEach(order => {
			if (order.OrderId != action.order.OrderId)
				newOrderList.push(order);
		});

		return {
			...state,
			OrderList: newOrderList,
			SuccessMessageStatus: false,
			LoadingStatus: false,
			Message: 'Order removed Successfully.',
		};
	}),
	on(removeOrderFailed, (state, action) => {

		return {
			...state,
			orderData: [...state.OrderList, action.message],
			SuccessMessageStatus: false,
			Message: action.message,
			LoadingStatus: false,
			OrderList: state.OrderList
		};
	}),

	on(removeMessage, (state, action) => {

		return {
			...state,
			orderData: [...state.OrderList],
			SuccessMessageStatus: false,
			Message: '',
			LoadingStatus: false,
			OrderList: state.OrderList
		};
	})
);

export function pizzaOrdersReducer(state: any, action: any) {
	return _orderReducer(state, action);
}
