import {AuthenticationService} from '../Services/authentication.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm} from '@angular/forms';
import {Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../Services/user.service';
import {first} from 'rxjs/operators';
import {User} from '../../models/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {

  LoginForm: FormGroup;
  loading = true;
  submitted = false;
  wrongCred = false;
  @Output() authentication = new EventEmitter();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService
  ) {
  }

  ngOnInit() {
    this.LoginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      }
    );
  }

  login() {
    this.loading = true;
    this.submitted = true;

    if (this.LoginForm.invalid) {
      if (this.LoginForm.controls.email.invalid) {
        console.log('email invalid form input');
      }
      if (this.LoginForm.controls.password.invalid) {
        console.log('password invalid form input');
      }
      return;
    }

    this.authenticationService.login(this.LoginForm)
      .subscribe(
        (data: any) => {
          console.log(data.token);
          localStorage.setItem('token', data.token);
          this.authentication.emit(true);
          this.userService.getUserProfile().subscribe(
            (data) => {
              console.log('okay');
              console.log(data);
              localStorage.setItem('userID', data.result.id);
              localStorage.setItem('firsName', data.result.firstName);

              /*
                            this.userService.currentUser = new User(
                              data.result.firstName,
                              data.result.lastName,
                              data.result.email,
                              data.result.password,
                              data.result.phoneNumber,
                              data.result.dateOfBirth
                            );
                            this.userService.currentUser.Id = data.result.id;
                            console.log(this.userService.currentUser.Id);
              */
            },
            (error) => {
              console.log('error while getting profile.');
            },
            () => {
              console.log('done');
            }
          );
        },
        error => {
          this.wrongCred = true;
          console.log('error');
        },
        () => {
          console.log('request sent.');
        }
      );
  }
}
