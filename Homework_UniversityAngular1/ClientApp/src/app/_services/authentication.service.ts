import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import * as current_user from '../current_user';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
  //'https://localhost:44355/users/authenticate'
  //'/api/authenticate'
<<<<<<< HEAD

  login(username: string, password: string) {
    return this.http.post<any>('https://authserverangular.azurewebsites.net/users/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(user));
=======
  public curr_user: string;
  login(username: string, password: string) {
      return this.http.post<any>('http://localhost:7505/users/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(user.token));
                  this.curr_user = username;
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
      sessionStorage.removeItem('currentUser');
<<<<<<< HEAD
=======
      this.curr_user = "";
    }
  debugger;
    currentUser() {
        return this.curr_user;
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8
    }
}
