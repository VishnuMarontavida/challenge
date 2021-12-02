import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardAuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: GuardAuthService, private router: Router) { }

  canActivate() {
    //Checking whether the token exists or not.
    //Based on that next page will come.
    if (this.auth.IsLoggedInStatus())
      return true;
    this.router.navigate(['login']);
    return false;
  }

}
