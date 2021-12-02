// import { Pizza } from './../models/Pizza';

// export interface PizzaOrderState {
//   OrderList: Pizza[] | [];
// }

// export const initialState: PizzaOrderState = {
//   OrderList: []
// }


// import { OrderDataDTO } from '../models/orderdata';

// export interface OrderState {  orders: OrderDataDTO[] | [];}
// export const initialState: OrderState = {  orders: [],};





import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Pizza } from './../models/Pizza';

// export interface OrdersState extends EntityState<Pizza> {
//   count: number;
// }

// export const OrdersAdapter = createEntityAdapter<Pizza>({
//   sortComparer: sortByName,
// });

// export const initialState: OrdersState = OrdersAdapter.getInitialState({
//   count: 0,
// });

export interface OrderState {  OrderList: Pizza[] | [];}
export const initialState: OrderState = {  OrderList: [],};

export function sortByName(a: Pizza, b: Pizza): number {
  // const compare = a.OrderId.localeCompare(b.OrderId);
  // if (compare > 0) {
  //   return -1;
  // }

  // if (compare < 0) {
  //   return 1;
  // }

  // return compare;

  return 1;
}
