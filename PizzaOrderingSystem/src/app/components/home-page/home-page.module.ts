import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { Routes,RouterModule } from '@angular/router';
import { OrderListComponent } from './pizza-order-detail/order-list/order-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { pizzaOrdersReducer } from '../../reducers/pizza-order.reducer';
import { PizzaOrderEffects } from '../../effects/pizza-order.effect';
import { EffectsModule } from '@ngrx/effects';

import {PizzaActionTypes} from '../../shared/enum/pizza-action-types.enum';



const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    // OrderListComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(PizzaActionTypes.Pizza_Order_List, pizzaOrdersReducer),
    EffectsModule.forFeature([PizzaOrderEffects]),
  ]
})
export class HomePageModule { }
