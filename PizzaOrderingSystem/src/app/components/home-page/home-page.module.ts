import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { Routes,RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { pizzaOrdersReducer } from '../../reducers/pizza-order.reducer';
import { PizzaOrderEffects } from '../../effects/pizza-order.effect';
import { EffectsModule } from '@ngrx/effects';

import {PizzaActionTypes} from '../../shared/enum/pizza-action-types.enum';
import {HeaderComponent} from './../../shared/header/header.component';

import { AddPizzaOrderComponent } from './add-pizza-order/add-pizza-order.component';
import { ViewPizzaOrderComponent } from './view-pizza-order/view-pizza-order.component';
import { ShowMessageComponent } from './../show-message/show-message.component';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';

const routes: Routes = [
  {
    path: '',
    // children: [
    //   { path: 'add', component: AddPizzaOrderComponent }
    // ]
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    AddPizzaOrderComponent,
    ViewPizzaOrderComponent,
    ShowMessageComponent,
    // LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    // StoreModule.forRoot({}),
    StoreModule.forFeature(PizzaActionTypes.Pizza_Order_List, pizzaOrdersReducer),
    EffectsModule.forFeature([PizzaOrderEffects]),
  ]
})
export class HomePageModule { }
