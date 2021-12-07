import { MessageData } from '../models/MessagingData';
import { Pizza } from './../models/Pizza';

export interface OrderState {
    OrderList: Pizza[] | [];
    LoadingStatus: boolean;
    ErrorMessageStatus: boolean;
    MessageData: MessageData;
}
export const initialState: OrderState = {
    OrderList: [],
    LoadingStatus: false,
    ErrorMessageStatus: false,
    MessageData: {
        Message: '',
        SuccessMessageStatus: false
    }
};
