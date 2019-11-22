import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor() { }
   firstName = '';
   lastName = '';
   email = '';
   password = '';
   id = '';
   phoneNumber = '';
   imageLink = '';
   birthday: Date ;

  onSubmit() {
    console.log(new User(this.firstName,
      this.lastName, this.email, this.password, this.id, this.phoneNumber, this.imageLink, this.birthday));
  }
  ngOnInit() {
  }
}
