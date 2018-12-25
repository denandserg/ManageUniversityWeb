import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable()
export class DataService {

  private url = "/api/student";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }
}
