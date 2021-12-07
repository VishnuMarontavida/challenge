import { Pizza, PizzaInsertData } from '../models/Pizza';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pizzaAPIs } from '../env-config';
import { PizzaImageTypes } from '../shared/enum/pizza-image-types.enum';

@Injectable({
  providedIn: 'root',
})

export class OrderService {

  timeoutInterval: any;
  constructor(private http: HttpClient) { }

  //Used to get all Pizza Orders from the API.
  getOrders(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(pizzaAPIs.orderGetAndPost)
      .pipe(
        map((data: any) => {
          const orders: Pizza[] = [];

          for (let key in data) {
            var orderId: number = +data[key].Order_ID;
            var tableNumber: number = +data[key].Table_No;

            var order: Pizza = {
              OrderId: orderId,
              Crust: data[key].Crust,
              Flavor: data[key].Flavor,
              Size: data[key].Size,
              Table_No: tableNumber,
              Image: ''
            }

            order.Image = this.getPizzaImage(order.Crust, order.Flavor);

            orders.push(order);
          }
          
          return orders;
        })
      );
  }

  addPizzaOrder(order: PizzaInsertData): Observable<Pizza> {
    var token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };

    return this.http.post<Pizza>(pizzaAPIs.orderGetAndPost, order, httpOptions)
      .pipe(
        map((addedOrder: Pizza) => {

          addedOrder.Image = this.getPizzaImage(addedOrder.Crust, addedOrder.Flavor);

          return addedOrder;
        })
      );
  }

  removePizzaOrder(order: Pizza): Observable<string> {

    const apiURL: string = pizzaAPIs.orderGetAndPost + '/' + order.OrderId;

    return this.http
      .delete<any>(apiURL)
      .pipe(
        map((deletedStatus: any) => {
          return deletedStatus;
        })
      );
  }

  getAuthToken() {
    var loggedinUserData: any = localStorage.getItem('userData');
    if (loggedinUserData) {
      var userData = JSON.parse(loggedinUserData);
      if (userData)
        return userData.access_token;
    }
  }

  getPizzaImage(crust: string, flavor: string): string {
    switch (flavor.toUpperCase()) {
      case PizzaImageTypes.Cheese.toUpperCase(): return PizzaImageTypes.CheeseImage;
      case PizzaImageTypes.Veggie.toUpperCase(): return PizzaImageTypes.VeggieImage;
      case PizzaImageTypes.Pepperoni.toUpperCase(): return PizzaImageTypes.PepperoniImage;
      case PizzaImageTypes.Meat.toUpperCase(): return PizzaImageTypes.MeatImage;
      case PizzaImageTypes.Margherita.toUpperCase(): return PizzaImageTypes.MargheritaImage;
      default: return PizzaImageTypes.CheeseImage;
    }
  }
}