// import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
// import { Update } from '@ngrx/entity';
import { Pizza } from './../models/Pizza';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  addOrder,
  addOrderFailed,
  addOrderSuccess,
  dummyAction,
  loadPizzaOrders,
  loadPizzaOrdersSuccess,
  removeMessage,
  removeOrder,
  removeOrderFailed,
  removeOrderSuccess
} from '../actions/pizza-order.action';
import { OrderService } from './../services/order.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { setErrorMessage, setLoadingSpinner } from '../shared/state/shared.actions';
import { allOrders } from '../selector/pizza-order.selector';

@Injectable()
export class PizzaOrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private store: Store<Pizza>
  ) { }

  loadOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPizzaOrders),
      withLatestFrom(this.store.select(allOrders)),
      mergeMap(([action, orders]) => {
        this.store.dispatch(setLoadingSpinner({ status: false }));
        if (!orders.length || orders.length === 1) {
          return this.orderService.getOrders().pipe(
            map((OrderList) => {
              //Now sorting the array by Order Id Ascending.
              OrderList = OrderList.sort((n1: any, n2: any) => n1.OrderId - n2.OrderId);
              //Finally returning the status.
              return loadPizzaOrdersSuccess({ OrderList });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  addOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addOrder),
      mergeMap((action) => {
        return this.orderService.addPizzaOrder(action.order).pipe(
          map((data: any) => {
            const order: Pizza = { ...action.order, OrderId: data.Order_ID };
            //returning the status and value after inserting the Order
            return  addOrderSuccess({ order });
          }),
          catchError((errResp) => {
            //Now calling the fail action
            return of(addOrderFailed({ message: 'Session expired, Logout and try again' }));
          })
        );
      })
    );
  });

  removeOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeOrder),
      mergeMap((action) => {
        return this.orderService.removePizzaOrder(action.order).pipe(
          map((data: any) => {
            //Getting the status after deleting the order.
            return removeOrderSuccess({ order: action.order });
          }),
          catchError((errResp) => {
            //Now calling the fail action
            return of(removeOrderFailed({ message: 'Oops. Can\'t perform order remove' }));
          })
        );
      })
    );
  });
}