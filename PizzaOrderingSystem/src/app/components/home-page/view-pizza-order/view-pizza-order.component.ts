import { Component, OnInit } from '@angular/core';
import { DropdownData } from 'src/app/models/DropdownData';
import { Pizza, PizzaInsertData } from 'src/app/models/Pizza';

@Component({
  selector: 'app-view-pizza-order',
  templateUrl: './view-pizza-order.component.html',
  styleUrls: ['./view-pizza-order.component.scss']
})
export class ViewPizzaOrderComponent implements OnInit {

  display: string = "none";
  flavorList: DropdownData[] = [];
  sizeList: DropdownData[] = [];
  crustList: DropdownData[] = [];

  constructor() { }

  pizzaOrder: Pizza = {
    Crust: '',
    Flavor: '',
    Size: '',
    Table_No: 0,
    OrderId: 0
  }

  ngOnInit() {
    //Load the initial data for the Add order page.
    this.setInitialData();
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
  openViewDetailModal(orderData: Pizza) {

    this.setControlValues(orderData);

    this.display = "block";
  }

  //For closing the opened popup
  onCloseViewDetailModal() {
    this.display = "none";
  }

  setControlValues(orderData: Pizza) {
    this.pizzaOrder = {
      Crust: orderData.Crust,
      Flavor: orderData.Flavor,
      Size: orderData.Size,
      Table_No: orderData.Table_No,
      OrderId: orderData.OrderId
    }
  }

}
