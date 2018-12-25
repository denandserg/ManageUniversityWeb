import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student2 } from './student-mark';

@Injectable()
export class DataService {

  private url = "/api/studentmark";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }
}
