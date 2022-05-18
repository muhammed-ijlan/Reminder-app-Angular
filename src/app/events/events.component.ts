import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any;
  uid: any;

  constructor(private ds: DataService) {
    this.uid = JSON.parse(localStorage.getItem('currentUid') || '');

    this.ds.events(this.uid).subscribe(
      (result: any) => {
        if (result) {
          console.log(result.events);

          this.events = result.events;
        }
      },
      (result: any) => {
        alert(result.error.message);
      }
    );
  }

  ngOnInit(): void {}

  deleteEvent() {
    return confirm('Are you sure you want to delete this item?');
  }

  updateEvent() {
    const updatedEvent = prompt('Update Your event');
  }
}
