import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PizzaActionTypes } from '../shared/enum/pizza-action-types.enum';
import { AuthState } from './../state/pizza-auth.state';
// export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(PizzaActionTypes.Login);

// export const isAuthenticated = createSelector(getAuthState, (state) => {
//   return state.user ? true : false;
// });

// export const getToken = createSelector(getAuthState, (state) => {
//   return state.user ? state.user.userToken : null;
// });

export const getMessage = createSelector(getAuthState, (state) => state.Message);
export const getSuccessMessageStatus = createSelector(getAuthState, (state) => state.SuccessMessageStatus);