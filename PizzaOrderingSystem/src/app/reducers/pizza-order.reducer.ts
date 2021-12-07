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
		
		return {
			...state,
			OrderList: action.OrderList,
			ErrorMessageStatus: false,
			LoadingStatus: false,
			MessageData:{
				SuccessMessageStatus:false,
				Message:''
			}
		};
	}
	),
	on(addOrderSuccess, (state, action) => {

		return {
			...state,
			OrderList: state.OrderList.slice().concat(action.order),
			ErrorMessageStatus: false,
			LoadingStatus: false,
			MessageData:{
				SuccessMessageStatus: true,
				Message: 'Order created Successfully.'
			}
		};
	}),
	on(addOrderFailed, (state, action) => {

		return {
			...state,
			orderData: [...state.OrderList, action.message],
			ErrorMessageStatus: true,
			MessageData:{
				SuccessMessageStatus: false,
				Message: action.message
			},
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
			ErrorMessageStatus: false,
			LoadingStatus: false,
			MessageData:{
				Message:'Order removed Successfully.',
				SuccessMessageStatus : true
			}
		};
	}),
	on(removeOrderFailed, (state, action) => {

		return {
			...state,
			orderData: [...state.OrderList, action.message],
			ErrorMessageStatus: true,
			MessageData:{
				SuccessMessageStatus: false,
				Message: action.message
			},
			LoadingStatus: false,
			OrderList: state.OrderList
		};
	}),

	on(removeMessage, (state, action) => {

		return {
			...state,
			orderData: [...state.OrderList],
			ErrorMessageStatus: false,
			MessageData:{
				SuccessMessageStatus: false,
				Message: ''
			},
			LoadingStatus: false,
			OrderList: state.OrderList
		};
	})
);

export function pizzaOrdersReducer(state: any, action: any) {
	return _orderReducer(state, action);
}
