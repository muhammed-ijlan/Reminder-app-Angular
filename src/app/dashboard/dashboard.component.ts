import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // date
  loginDate: any;

  // event form modal
  eventForm = this.fb.group({
    event: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  });

  constructor(private fb: FormBuilder) {
    this.loginDate = new Date();
  }

  ngOnInit(): void {}

  //event
  addEvent() {
    console.log('Event Button Clicked');
  }
}
