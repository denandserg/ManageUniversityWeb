import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student-shedule';

@Injectable()
export class DataService {

  private url = "/api/studentshedule";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }
}
