import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher-shedule';

@Injectable()
export class DataService {

  private url = "/api/teachershedule";

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get(this.url);
  }
}
