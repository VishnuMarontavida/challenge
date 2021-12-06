import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { autoLogout } from 'src/app/actions/pizza-auth.action';
import { loadPizzaOrders, removeMessage, removeOrder } from 'src/app/actions/pizza-order.action';
import { Pizza } from 'src/app/models/Pizza';
import { allOrders, getMessageData } from 'src/app/selector/pizza-order.selector';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';
import { PizzaActionTypes } from 'src/app/shared/enum/pizza-action-types.enum';
import { OrderState } from 'src/app/state/pizza-order.state';
import { AddPizzaOrderComponent } from './add-pizza-order/add-pizza-order.component';
import { ViewPizzaOrderComponent } from './view-pizza-order/view-pizza-order.component';
import { ShowMessageComponent } from './../show-message/show-message.component';
import { CommunicationService } from 'src/app/shared/Communication/CommunicationService';
import { MessageData } from 'src/app/models/MessagingData';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild(AddPizzaOrderComponent) addOrderModal: AddPizzaOrderComponent;
  @ViewChild(ViewPizzaOrderComponent) viewOrderModal: ViewPizzaOrderComponent;
  @ViewChild(LoadingSpinnerComponent) loadSpinnerEvent: LoadingSpinnerComponent;

  constructor(
    private store: Store<OrderState>,
    private communication: CommunicationService
  ) { }

  pizzaOrders: Observable<Pizza[]>;
  count: Observable<number>;

  message: Observable<string>;
  SuccessMessageStatus: Observable<boolean>;
  ErrorMessageStatus: Observable<boolean>;

  messageData: Observable<MessageData>;

  successDisplay: string = 'none';
  errorDisplay: string = 'none';
  returnMessage: string;

  ngOnInit(): void {
    //Now getting the pizza orders.
    this.loadOrderList();

    this.communication.homeMethodCalled$.subscribe((returnObj: any) => {
      if (returnObj) {
        this.returnMessage = returnObj.message;
        if (returnObj.success) this.successDisplay = 'block';
        else this.errorDisplay = 'block'; setTimeout(() => {
          this.errorDisplay = 'none';
          this.successDisplay = 'none';
        }, 4000);
      }
    });

    this.communication.spinnerAnimationCalled$.subscribe((status: boolean) => {
      if (!status)
        this.loadSpinnerEvent.hideLoadingAnimation();
      else
        this.loadSpinnerEvent.showLoadingAnimation();
    });
  }

  loadOrderList() {
    this.loadSpinnerEvent.showLoadingAnimation();
    this.pizzaOrders = this.store.select(allOrders);
    this.store.dispatch(loadPizzaOrders());

    //Getting the message stored on the state.
    this.messageData = this.store.select(getMessageData);
    // this.SuccessMessageStatus = this.store.select(getSuccessMessageStatus);
    // this.ErrorMessageStatus = this.store.select(getErrorMessageStatus);
  }

  //Used to Remove the Pizza Order data from the server side.
  onOderRemove(order: Pizza) {
    if (confirm('Are you sure, you want to remove the order?')) {
      this.store.dispatch(removeOrder({ order }));

      window.scrollTo(0, 0);
    }
  }

  //Used to View the Pizza Order data based on the selected Order.
  orderViewDetail(order: Pizza) {
    this.viewOrderModal.openViewDetailModal(order);
  }

  //Used to order new pizza.
  orderNewPizza() {
    this.addOrderModal.openModal();
    window.scrollTo(0, 0);
  }

  //Closing the message and removing the message label
  onCloseMessage() {
    this.store.dispatch(removeMessage());

  }

}