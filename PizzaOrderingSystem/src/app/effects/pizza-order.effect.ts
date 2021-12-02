// import { AppState } from './../../store/app.state';
// import { getPosts } from './posts.selector';
import { Store } from '@ngrx/store';
// import { Update } from '@ngrx/entity';
import { Pizza } from './../models/Pizza';
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  loadPizzaOrders,
  loadPizzaOrdersSuccess
} from '../actions/pizza-order.action';
import { OrderService } from './../services/order.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dummyAction } from '../actions/pizza-order.action';


@Injectable()
export class PizzaOrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private store: Store<Pizza>
  ) {}

  // loadOrders$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadPizzaOrders),
  //     withLatestFrom(this.store.select(getPosts)),
  //     mergeMap(([action, pizzas]) => {
  //       if (!pizzas.length || pizzas.length === 1) {
  //         return this.orderService.getOrders().pipe(
  //           map((pizzas) => {
  //             return loadPizzaOrdersSuccess({ pizzas });
  //           })
  //         );
  //       }
  //       return of(dummyAction());
  //     })
  //   );
  // });

}