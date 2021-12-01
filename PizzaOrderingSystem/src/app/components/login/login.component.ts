import { setLoadingSpinner } from './../../shared/action/shared.actions';
import { loginStart } from '../../actions/pizza-auth.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PizzaAuthResponse } from '../../models/PizzaAuthResponse';
import { LoginData } from 'src/app/models/LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<PizzaAuthResponse>) { }

  ngOnInit(): void { }

  //Function called on submit button click.
  onLoginSubmit(userName: string, password: string) {
    if (this.validate(userName, password)) {
      var userData: LoginData = {
        username: userName,
        password: password
      }
      this.store.dispatch(setLoadingSpinner({ status: true }));
      this.store.dispatch(loginStart({userData}));
      //Todo : Now Iam not showing the error message in UI.Need to show that.
    }
  }

  //Validate the login form.
  validate(userName: string, password: string): boolean {

    //todo
    //Now Just setting the alert message.
    //need to chage that by proper error message.
    //this will change after the error message componenent.
    if ((userName == null || userName == '') && (password == null || password == '')) {

      alert('Enter credentials');
      return false;
    }
    return true;
  }
}
