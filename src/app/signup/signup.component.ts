import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  userForm: FormGroup;
  submitted = false;
  users: Observable<User[]>;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    },
    );
    this.reloadData();
  }
  reloadData() {
    this.users = this.userService.getUsersList();
  }

  get userFormControl() {
    return this.userForm.controls;
  }

  newAuthor(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      this.save();
    }
  }

  gotoList() {
    // this.reloadData();
    this.router.navigate(['']);
  }
}
