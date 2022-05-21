import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any;
  uid: any;

  constructor(private ds: DataService, private router: Router) {
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
  eventId: any;
  deleteEvent(event: any) {
    this.uid = JSON.parse(localStorage.getItem('currentUid') || '');
    this.eventId = event.id;

    if (confirm('Are you sure you want to delete this item?')) {
      return this.ds.deleteEvent(this.uid, this.eventId).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            window.location.reload();
          }
        },
        (result: any) => {
          alert(result.error.message);
        }
      );
    } else {
      return this.router.navigateByUrl('/event');
    }
  }

  updateEvent() {
    const updatedEvent = prompt('Update Your event');
  }
}
