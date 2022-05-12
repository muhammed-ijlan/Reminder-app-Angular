import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any;
  acno: any;

  constructor(private ds: DataService) {
    // this.acno = JSON.parse(localStorage.getItem('currentUid') || '');
  }

  ngOnInit(): void {}

  deleteEvent() {
    alert('Event Deleted');
  }

  updateEvent() {
    alert('Event Updated');
  }
}
