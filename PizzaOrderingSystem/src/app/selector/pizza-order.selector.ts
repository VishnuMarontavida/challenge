import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PizzaActionTypes } from '../shared/enum/pizza-action-types.enum';
import { OrderState } from '../state/pizza-order.state';


export const ORDER_STATE_NAME = PizzaActionTypes.Pizza_Order_List;
// Creating feature selector for fetching orders
const getOrdersState = createFeatureSelector<OrderState>(ORDER_STATE_NAME);

export const allOrders = createSelector(getOrdersState, (state) => { return state.OrderList ? state.OrderList : []; });
