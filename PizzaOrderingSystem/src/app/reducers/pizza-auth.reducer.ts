import { addOrderFailedStatus, autoLogout, loginFail, loginSuccess } from '../actions/pizza-auth.action';
import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/pizza-auth.state';

const appReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            Message: '',
            SuccessMessageStatus: false,
            user: action.user,
        };
    }),
    on(loginFail, (state, action) => {
        return {
            ...state,
            Message: action.message,
            SuccessMessageStatus: false,
            user: action,
        };
    }),
    on(autoLogout, (state) => {

        return {
            ...state,
            user: null,
        };
    }),
    on(addOrderFailedStatus, (state, action) => {

		return {
			...state,
			Message: action.message,
			LoadingStatus: false
		};
	}),
);

export function AuthReducer(state: any, action: any) {
    return appReducer(state, action);
}
