import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //login form Model
  loginForm = this.fb.group({
    uid: ['', Validators.pattern('[0-9 ]*')],
    password: ['', Validators.required, Validators.pattern('[a-zA-Z0-9]*')],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  //login
  login() {
    console.log('Login Clicked');
  }
}
