import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getOptions() {
    let token = JSON.parse(localStorage.getItem('token') || '');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.append('access-token', token);
      options.headers = headers;
    }
    return options;
  }

  //register
  register(uname: any, uid: any, password: any) {
    const data = {
      uname,
      uid,
      password,
    };
    return this.http.post('http://localhost:3000/register', data);
  }

  login(uid: any, password: any) {
    const data = {
      uid,
      password,
    };
    return this.http.post('http://localhost:3000/login', data);
  }

  addEvent(uid: any, data: any) {
    const body = {
      uid,
      events: data,
    };
    return this.http.post(
      'http://localhost:3000/dashboard',
      body,
      this.getOptions()
    );
  }

  events(uid: any) {
    const body = {
      uid,
    };
    return this.http.post(
      'http://localhost:3000/event',
      body,
      this.getOptions()
    );
  }

  deleteAcno(uid: any) {
    return this.http.delete(
      'http://localhost:3000/deleteUid/' + uid,
      this.getOptions()
    );
  }

  deleteEvent(uid: any, id: any) {
    return this.http.delete(
      `http://localhost:3000/event/delete/${uid}/${id}`,
      this.getOptions()
    );
  }
}
