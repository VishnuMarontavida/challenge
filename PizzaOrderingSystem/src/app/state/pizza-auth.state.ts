import { PizzaAuthResponse } from "../models/PizzaAuthResponse";

export interface AuthState {
    authenticateData: PizzaAuthResponse | null;
    Message: string;
    SuccessMessageStatus: boolean;
    LoadingStatus: boolean;
}

export const initialState: AuthState = {
    authenticateData: null,
    Message: '',
    SuccessMessageStatus: true,
    LoadingStatus: false
};
