import { createAction, props, Action } from '@ngrx/store';
import { PizzaActionTypes } from '../shared/enum/pizza-action-types.enum';
import { PizzaAuthResponse } from '../models/PizzaAuthResponse';
import { LoginData } from '../models/LoginData';

export const loginStart = createAction(
  PizzaActionTypes.LOGIN_START,
  props<{ userData:LoginData }>()
);
export const loginSuccess = createAction(
  PizzaActionTypes.LOGIN_SUCCESS,
  props<{ user: PizzaAuthResponse; redirect: boolean }>()
);
export const loginFail = createAction(
  PizzaActionTypes.LOGIN_FAIL,
  props<{ message: string; redirect: boolean }>()
);

export const autoLogout = createAction(PizzaActionTypes.LOGOUT_ACTION);

export const addOrderFailedStatus = createAction(
  PizzaActionTypes.ADD_ORDER_FAIL,
  props<{ message: string }>()
);