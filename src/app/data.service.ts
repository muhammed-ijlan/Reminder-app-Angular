import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  //register
  register(uname: any, uid: any, password: any) {
    const data = {
      uname,
      uid,
      password,
    };
    return this.http.post('http://localhost:3000/register', data);
  }

  login() {}

  events() {}

  addEvent() {}
}
