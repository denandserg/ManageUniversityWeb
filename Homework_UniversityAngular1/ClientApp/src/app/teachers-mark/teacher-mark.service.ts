import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher1 } from './teacher-mark';
import { User } from '../_models';

@Injectable()
export class DataService {

  private url = "/api/teachermark";

  constructor(private http: HttpClient) {
  }

  getTeachers() {
<<<<<<< HEAD
    //return this.http.get(this.url);
    let obj: User = JSON.parse(sessionStorage.getItem('currentUser'));
    var token = obj.token;
    return this.http.post<any>(this.url, { "token": token });
=======
    //this.http.post<any>(this.url, { "token": sessionStorage.getItem('currentUser') });
    return this.http.get(this.url);
>>>>>>> 2bc316c2645994e0bb63e759a4070c321633e3c8
  }
}
