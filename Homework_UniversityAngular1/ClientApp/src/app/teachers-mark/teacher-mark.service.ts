import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher1 } from './teacher-mark';

@Injectable()
export class DataService {

  private url = "/api/teachermark";

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get(this.url);
  }
}
