import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher1 } from './teacher-mark';

@Injectable()
export class DataService {

  private url = "/api/teachermark";

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    //this.http.post<any>(this.url, { "token": sessionStorage.getItem('currentUser') });
    return this.http.get(this.url);
  }
}
