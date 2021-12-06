import { Pizza } from './../models/Pizza';

export interface OrderState {
    OrderList: Pizza[] | [];
    Message: string;
    SuccessMessageStatus: boolean;
    LoadingStatus: boolean;
}
export const initialState: OrderState = {
    OrderList: [],
    Message: '',
    SuccessMessageStatus: true,
    LoadingStatus: false
};
