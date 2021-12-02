import { Pizza } from '../models/Pizza';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class OrderService {

    timeoutInterval: any;
    constructor(private http: HttpClient) { }

    getOrders(): Observable<Pizza[]> {
        return this.http
          .get<Pizza[]>(`api/orders`)
          .pipe(
            map((data) => {
              const orders: Pizza[] = [];
              for (let key in data) {
                orders.push({ ...data[key], OrderId: key });
              }
              return orders;
            })
          );
      }
    
    
}