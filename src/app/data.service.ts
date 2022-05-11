import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  database: any = {
    1000: {
      userName: 'Max',
      userId: 1000,
      password: 1000,
      events: [],
    },
    1001: {
      userName: 'Sam',
      userId: 1001,
      password: 1001,
      events: [],
    },
  };

  //register

  register() {}
}
