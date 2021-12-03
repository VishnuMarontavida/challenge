import { Pizza } from './../models/Pizza';

export interface OrderState {  OrderList: Pizza[] | [];}
export const initialState: OrderState = {  OrderList: [],};
