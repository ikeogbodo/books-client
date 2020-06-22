
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../service/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = '';
  password = '';
  invalidLogin = false;

  @Input() error: string | null;

  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private formBuilder: FormBuilder,
  )
  { }

  ngOnInit() {

  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        this.error = error.message;

      }
    )
    );

  }

}
