import { MessageData } from '../models/MessagingData';
import { Pizza } from './../models/Pizza';

export interface OrderState {
    OrderList: Pizza[] | [];
    // Message: string;
    // SuccessMessageStatus: boolean;
    LoadingStatus: boolean;
    ErrorMessageStatus: boolean;
    MessageData: MessageData;
}
export const initialState: OrderState = {
    OrderList: [],
    // Message: '',
    // SuccessMessageStatus: true,
    LoadingStatus: false,
    ErrorMessageStatus: false,
    MessageData: {
        Message: '',
        SuccessMessageStatus: false
    }
};
