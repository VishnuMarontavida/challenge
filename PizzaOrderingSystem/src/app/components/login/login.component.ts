import { setLoadingSpinner } from './../../shared/state/shared.actions';
import { loginStart } from '../../actions/pizza-auth.action';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PizzaAuthResponse } from '../../models/PizzaAuthResponse';
import { LoginData } from 'src/app/models/LoginData';
import { Observable } from 'rxjs';
import { getMessage, getSuccessMessageStatus } from 'src/app/selector/auth.selector';
import { removeMessage } from 'src/app/actions/pizza-order.action';
import { CommunicationService } from 'src/app/shared/Communication/CommunicationService';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(LoadingSpinnerComponent) loadSpinnerEvent: LoadingSpinnerComponent;

  constructor(
    private store: Store<PizzaAuthResponse>,
    private communication: CommunicationService,

  ) { }

  message: Observable<string>;
  SuccessMessageStatus: Observable<boolean>

  successDisplay: string = 'none';
  errorDisplay: string = 'none';
  returnMessage: string;

  ngOnInit(): void {

    //Getting the message stored on the state.
    this.message = this.store.select(getMessage);
    this.SuccessMessageStatus = this.store.select(getSuccessMessageStatus);

    this.communication.loginMethodCalled$.subscribe((message: string) => {
      if (message) {
        this.returnMessage = message;
        this.errorDisplay = 'block';
        setTimeout(() => {
          this.errorDisplay = 'none';
        }, 4000);
      }
    });

    this.communication.spinnerAnimationCalled$.subscribe((status: boolean) => {
      if (!status)
        this.loadSpinnerEvent.hideLoadingAnimation();
      else
        this.loadSpinnerEvent.showLoadingAnimation();
    });
  }

  //Function called on submit button click.
  onLoginSubmit(userName: string, password: string) {
    if (this.validate(userName, password)) {

      //Now showing the animation.
      this.loadSpinnerEvent.showLoadingAnimation();
      var userData: LoginData = {
        username: userName,
        password: password
      }
      this.store.dispatch(loginStart({ userData }));
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

      this.errorDisplay = 'block';
      this.returnMessage = 'Enter username and password';
      setTimeout(() => {
        this.errorDisplay = 'none';
      }, 4000);

      // alert('Enter username and password');
      return false;
    }
    return true;
  }

  onCloseHandled() {
    this.store.dispatch(removeMessage());
  }

}
