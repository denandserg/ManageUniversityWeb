import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speciality } from './speciality';

@Injectable()
export class DataService {

  private url = "/api/speciality";

  constructor(private http: HttpClient) {
  }

  getSpecialities() {
    return this.http.get(this.url);
  }
}
