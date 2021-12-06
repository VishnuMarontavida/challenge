import { Pizza, PizzaInsertData } from '../models/Pizza';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pizzaAPIs } from '../env-config';

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
              Table_No: tableNumber
            }
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

    return this.http.post<Pizza>(pizzaAPIs.orderGetAndPost, order, httpOptions);
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
}