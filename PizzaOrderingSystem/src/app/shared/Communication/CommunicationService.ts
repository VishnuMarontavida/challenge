import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root', })
// Communication service to call functions in a component/module from effect
export class CommunicationService {

  //Used to call methods in home, login modules 
  private homeMethodCallSource = new Subject<any>();
  private loginMethodCallSource = new Subject<any>();
  private loadingAnimationCallSource = new Subject<any>();

  homeMethodCalled$ = this.homeMethodCallSource.asObservable();
  loginMethodCalled$ = this.loginMethodCallSource.asObservable();
  spinnerAnimationCalled$ = this.loadingAnimationCallSource.asObservable();

  callHomeMethod(message: string, success: boolean) {
    const returnObj: any = { message: message, success: success, };
    this.homeMethodCallSource.next(returnObj);
  }
  callLoginErrorMethod(message: string) {
    this.loginMethodCallSource.next(message);
  }  
  loadSpinnerAnimation(status: boolean) {
    this.loadingAnimationCallSource.next(status);
  }  
  
}