import {
  setLoadingSpinner,
  setErrorMessage,
} from '../shared/state/shared.actions';

import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { exhaustMap, map, catchError, tap, mergeMap } from 'rxjs/operators';
import { autoLogout, loginFail, loginStart, loginSuccess } from '../actions/pizza-auth.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/store/app.state';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Pizza } from '../models/Pizza';
import { LoginData } from '../models/LoginData';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private orderService: OrderService,
    private store: Store<Pizza>,
    private router: Router
  ) { }

  //This will trigger for login operation.
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action: any) => {
       
        return this.authService.login(action.userData).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return loginSuccess({ user, redirect: true });
          }),
          catchError((errResp) => {
            const errorMessage = this.authService.getErrorMessage(
              // errResp.error.error.message
              'INVALID_PASSWORD'
            );
            this.store.dispatch(setErrorMessage({ message: errorMessage }));
            return of(loginFail({ message: 'Incorrect username or password', redirect: true }));
          })
        );
      })
    );
  });

  //This will trigger after the Login success.
  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          if (action.redirect) {
            this.router.navigate(['/homePage']);
          }
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(autoLogout),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['login']);
        })
      );
    },
    { dispatch: false }
  );
}