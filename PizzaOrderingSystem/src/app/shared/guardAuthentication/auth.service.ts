import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService {

  constructor() { }

  //Used to check whether the token exists or not.
  IsLoggedInStatus(){
    return !!localStorage.getItem('userData');
  }
}
