import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // date
  loginDate: any;
  events: any;
  uname: any;
  uid: any;
  userId: any;

  // event form modal
  eventForm = this.fb.group({
    event: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {
    this.loginDate = new Date();
    this.uname = JSON.parse(localStorage.getItem('currentUname') || '');
    this.uid = JSON.parse(localStorage.getItem('currentUid') || '');
  }
  ngOnInit(): void {}

  //event
  addEvent() {
    const event = this.eventForm.value.event;

    this.ds.addEvent(this.uid, event).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
        }
      },
      (result: any) => {
        alert(result.error.message);
      }
    );
  }

  deleteFromParent() {
    this.userId = JSON.parse(localStorage.getItem('currentUid') || '');
  }
  onCancel() {
    this.userId = '';
  }
  onDelete(event: any) {
    this.ds.deleteAcno(event).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          this.router.navigateByUrl('');
        }
      },
      (result: any) => {
        alert(result.error.message);
      }
    );
  }
}
