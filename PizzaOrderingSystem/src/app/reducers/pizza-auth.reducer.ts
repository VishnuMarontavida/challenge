import { autoLogout, loginFail, loginSuccess } from '../actions/pizza-auth.action';
import { createReducer, on } from '@ngrx/store';
import { PizzaAuthResponse } from '../models/PizzaAuthResponse';
// import { initialState } from './auth.state';

export interface AuthState {
    authenticateData: PizzaAuthResponse | null;
}

export const initialState: AuthState = {
    authenticateData: null,
};

const appReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        };
    }),
    on(loginFail, (state, action) => {
        return {
            ...state,
            user: action,
        };
    }),
    on(autoLogout, (state) => {
        return {
          ...state,
          user: null,
        };
      })
);

export function AuthReducer(state: any, action: any) {
    return appReducer(state, action);
}
