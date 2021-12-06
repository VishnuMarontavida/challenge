// import { Update } from '@ngrx/entity';
import { Pizza, PizzaInsertData } from './../models/Pizza';
import { createAction, props } from '@ngrx/store';
import { PizzaActionTypes } from '../shared/enum/pizza-action-types.enum';

export const loadPizzaOrders = createAction(PizzaActionTypes.LOAD_ORDERS);

export const loadPizzaOrdersSuccess = createAction(
  PizzaActionTypes.LOAD_ORDERS_SUCCESS,
  props<{ OrderList: Pizza[] }>()
);

export const addOrder = createAction(PizzaActionTypes.ADD_ORDER_ACTION, props<{ order: PizzaInsertData }>());
export const addOrderSuccess = createAction(
  PizzaActionTypes.ADD_ORDER_SUCCESS,
  props<{ order: Pizza }>()
);
export const addOrderFailed = createAction(
  PizzaActionTypes.ADD_ORDER_FAIL,
  props<{ message: string }>()
);

export const removeOrder = createAction(PizzaActionTypes.REMOVE_ORDER_ACTION, props<{ order: Pizza }>());
export const removeOrderSuccess = createAction(
  PizzaActionTypes.REMOVE_ORDER_SUCCESS,
  props<{ order: Pizza }>()
);
export const removeOrderFailed = createAction(
  PizzaActionTypes.REMOVE_ORDER_FAIL,
  props<{ message: string }>()
);

export const removeMessage = createAction(
  PizzaActionTypes.REMOVE_MESSAGE
);

export const dummyAction = createAction('[dummy action]');