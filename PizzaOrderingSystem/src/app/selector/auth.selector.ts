import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PizzaActionTypes } from '../shared/enum/pizza-action-types.enum';
import { AuthState } from './../state/pizza-auth.state';
// export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(PizzaActionTypes.Login);

export const getMessage = createSelector(getAuthState, (state) => state.Message);
export const getSuccessMessageStatus = createSelector(getAuthState, (state) => state.SuccessMessageStatus);
export const getErrorMessageStatus = createSelector(getAuthState, (state) => state.ErrorMessageStatus);