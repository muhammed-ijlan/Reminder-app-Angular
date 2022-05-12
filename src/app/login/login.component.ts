import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //login form Model
  loginForm = this.fb.group({
    uid: ['', [Validators.pattern('[0-9 ]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  //login
  login() {
    const uid = this.loginForm.value.uid;
    const password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      this.ds.login(uid, password).subscribe(
        (result: any) => {
          if (result) {
            localStorage.setItem(
              'currentUid',
              JSON.stringify(result.currentUid)
            );
            localStorage.setItem(
              'currentUname',
              JSON.stringify(result.currentUser)
            );

            localStorage.setItem('token', JSON.stringify(result.token));
            alert(result.message);
            this.router.navigateByUrl('dashboard');
          }
        },
        (result: any) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }
}
