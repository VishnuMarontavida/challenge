import { Observable } from 'rxjs';
import { PizzaAuthResponse } from './../models/PizzaAuthResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pizzaAPIs } from '../env-config';
import { LoginData } from '../models/LoginData';

@Injectable({
    providedIn: 'root',
})

export class AuthService {

    timeoutInterval: any;
    constructor(private http: HttpClient) { }

    login(userData: LoginData): Observable<PizzaAuthResponse> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post<PizzaAuthResponse>(pizzaAPIs.authAPI, userData, httpOptions);
    }

    formatUser(data: PizzaAuthResponse) {
        return data;
    }

    getErrorMessage(message: string) {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            default:
                return 'Unknown error occurred. Please try again';
        }
    }

    setUserInLocalStorage(user: PizzaAuthResponse) {
        localStorage.removeItem('userData');
        localStorage.setItem('userData', JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem('userData');
        // if (this.timeoutInterval) {
        //     clearTimeout(this.timeoutInterval);
        //     this.timeoutInterval = null;
        // }
    }
}