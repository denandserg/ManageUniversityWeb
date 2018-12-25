import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student1 } from './student-group';

@Injectable()
export class DataService {

  private url = "/api/studentgroup";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }
}
