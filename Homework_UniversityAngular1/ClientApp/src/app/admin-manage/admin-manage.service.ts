import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin} from './admin';

@Injectable()
export class DataService {

  private url = "/api/adminmanage";

  constructor(private http: HttpClient) {
  }

  getAdmins() {
    return this.http.get(this.url);
  }
}
