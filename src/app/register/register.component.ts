import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //register form model
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    const uname = this.registerForm.value.uname;
    const uid = this.registerForm.value.uid;
    const password = this.registerForm.value.password;

    if (this.registerForm.valid) {
      this.ds.register(uname, uid, password).subscribe(
        (result: any) => {
          if (result) {
            // alert(result.message);
            this.router.navigateByUrl('login');
          }
        },
        (result: any) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid form');
    }
  }
}
