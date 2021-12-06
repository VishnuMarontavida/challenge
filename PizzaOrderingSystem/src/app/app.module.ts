import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginRoutingModule } from './components/login/login-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthEffects } from './effects/pizza-auth.effects';
import { AuthReducer } from './reducers/pizza-auth.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PizzaActionTypes } from './shared/enum/pizza-action-types.enum';


@NgModule({
  declarations: [
    AppComponent,
    // LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(AuthReducer),
    StoreModule.forFeature(PizzaActionTypes.Login, AuthReducer),
    StoreRouterConnectingModule.forRoot({
      // serializer: CustomSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
