import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza, PizzaInsertData } from 'src/app/models/Pizza';
import { Store } from '@ngrx/store';
import { addOrder } from 'src/app/actions/pizza-order.action';
import { Observable } from 'rxjs';
import { DropdownData } from 'src/app/models/DropdownData';
import { HomeLoadingAnimationComponent } from './../home-loading-animation/home-loading-animation.component';
import { CommunicationService } from 'src/app/shared/Communication/CommunicationService';

@Component({
  selector: 'app-add-pizza-order',
  templateUrl: './add-pizza-order.component.html',
  styleUrls: ['./add-pizza-order.component.scss']
})
export class AddPizzaOrderComponent implements OnInit {

  @ViewChild(HomeLoadingAnimationComponent) loadSpinnerEvent: HomeLoadingAnimationComponent;

  display: string = "none";
  confirmationShowStatus:string = 'none';

  flavorList: DropdownData[] = [];
  sizeList: DropdownData[] = [];
  crustList: DropdownData[] = [];

  constructor(
    private store: Store<Pizza>,
    private communication: CommunicationService
    ) { }

  pizzaOrder: PizzaInsertData = {
    Crust: '',
    Flavor: '',
    Size: '',
    Table_No: 0
  }

  insertingData: PizzaInsertData = {
    Crust: '',
    Flavor: '',
    Size: '',
    Table_No: 0
  };

  successDisplay: string = 'none';
  errorDisplay: string = 'none';
  returnMessage: string;

  ngOnInit(): void {
    //Load the initial data for the Add order page.
    this.setInitialData();

    this.communication.spinnerAnimationCalled$.subscribe((status: boolean) => {
      if (!status)
        this.loadSpinnerEvent.hideLoadingAnimation();
      else
        this.loadSpinnerEvent.showLoadingAnimation();
    });
  }

  setInitialData() {
    this.flavorList = [
      { value: 'Cheese', text: 'Cheese' },
      { value: 'Veggie', text: 'Veggie' },
      { value: 'Pepperoni', text: 'Pepperoni' },
      { value: 'Meat', text: 'Meat' },
      { value: 'Margherita', text: 'Margherita' }
    ];

    this.sizeList = [
      { value: 'Small', text: 'Small' },
      { value: 'Medium', text: 'Medium' },
      { value: 'Large', text: 'Large' },
      { value: 'Fiesta', text: 'Fiesta' }
    ];

    this.crustList = [
      { value: 'Classic', text: 'Classic' },
      { value: 'Cheese', text: 'Cheese' }
    ]

    if (this.flavorList.length > 0)
      this.pizzaOrder.Flavor = this.flavorList[0].value;
    if (this.sizeList.length > 0)
      this.pizzaOrder.Size = this.sizeList[0].value;
    if (this.crustList.length > 0)
      this.pizzaOrder.Crust = this.crustList[0].value;

  }

  //Used to open the popup
  openModal() {
    this.display = "block";
    //Load the initial data for the Add order page.
    this.setInitialData();
    this.pizzaOrder.Table_No = 0;
  }

  //Closing the opened poup
  onCloseHandled() {
    this.display = "none";
  }

  //Used to insert Order
  addPizzaOrder() {
    if (this.validateOrder()) {

      //Now show the confirmation message.
      this.confirmationShowStatus = 'block';

      
    }
  }

  insertNewPizzaOrder(){
    
    //Now showing the animation.
    this.loadSpinnerEvent.showLoadingAnimation();

    var tableNumber = this.pizzaOrder.Table_No.toString();

    this.insertingData = {
      Crust: this.pizzaOrder.Crust,
      Flavor: this.pizzaOrder.Flavor,
      Size: this.pizzaOrder.Size,
      Table_No: Number.parseInt(tableNumber)
    }

    var order = this.insertingData;
    this.store.dispatch(addOrder({ order }));

    //Clearing the control values.
    this.setInitialData();

    //Closing the confirmation
    this.confirmationShowStatus = 'none';

    //Closing the popup
    this.display = "none";

  }

  onConfirmationCloseHandled(){
     //Now hide the confirmation message.
    this.confirmationShowStatus = 'none';
  }

  //Used to valdate the inseting value.
  validateOrder() {
    if (this.pizzaOrder.Table_No == 0) {

      //Used to show the error message.
      this.errorDisplay = 'block';
      this.returnMessage = 'Enter table number';
      setTimeout(() => {
        this.errorDisplay = 'none';
      }, 4000);


      
      // alert('Enter table number.')

      return false;
    }
    return true;
  }

  //Used to insert inly numbers.
  isNumber(event: any) {
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
