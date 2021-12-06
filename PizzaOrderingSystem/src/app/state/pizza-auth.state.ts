import { PizzaAuthResponse } from "../models/PizzaAuthResponse";

export interface AuthState {
    authenticateData: PizzaAuthResponse | null;
    Message: string;
    SuccessMessageStatus: boolean;
    ErrorMessageStatus:boolean;
    LoadingStatus: boolean;
}

export const initialState: AuthState = {
    authenticateData: null,
    Message: '',
    SuccessMessageStatus: true,
    ErrorMessageStatus:false,
    LoadingStatus: false
};
