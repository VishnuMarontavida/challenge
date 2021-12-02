import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { autoLogout } from 'src/app/actions/pizza-auth.action';
import { loadPizzaOrders } from 'src/app/actions/pizza-order.action';
import { Pizza } from 'src/app/models/Pizza';
import { allOrders } from 'src/app/selector/pizza-order.selector';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';
import { PizzaActionTypes } from 'src/app/shared/enum/pizza-action-types.enum';
import { OrderState } from 'src/app/state/pizza-order.state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store<OrderState>) { }

  pizzaOrders: Observable<Pizza[]>;
  count: Observable<number>;
  ngOnInit(): void {
    //Starting the loading animation.
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.pizzaOrders = this.store.select(allOrders);
    this.store.dispatch(loadPizzaOrders());
  }

  //Used to Remove the Pizza Order data from the server side.
  onOderRemove(orderId:number){
    if (confirm('Are you sure you want to remove the order')) {
      // this.store.dispatch(deleteOrder({ id }));
    }
  }

  //Used to View the Pizza Order data based on the selected Order.
  orderViewDetail(order:Pizza){

  }

  //Used to order new pizza.
  orderNewPizza(){

  }

}