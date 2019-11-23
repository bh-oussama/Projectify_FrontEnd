import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  constructor() { }
   firstName = '';
   lastName = '';
   email = '';
   password = '';
   id: string ;
   phoneNumber = '';
   imageLink = '';
   birthday: Date ;
   confirmPassword = '';
   user: User;

  isFormValid(): boolean {
      if (this.firstName.length < 4 ) {
        console.log('error first name');
        return false;
      }
      if (this.lastName.length <= 0 ) {
        console.log('error last name');
        return false;
      }
      if  (!this.email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')) {
        console.log('error email');
        return false;
      }
      if (this.password.length < 8 || this.password !== this.confirmPassword) {
        console.log('eror pass');
        return false;
      }
      if (this.phoneNumber.toString().length !== 8) {
        console.log('error phone number');
        return false;
      }
      return true;
   }

onSubmit() {
    if (this.isFormValid()) {
      this.user = new User(this.firstName,
        this.lastName, this.email, this.password, this.id, this.phoneNumber, this.imageLink, this.birthday);
      console.log(this.user);
    } else {
      console.log('invalid');
    }
  }
ngOnInit() {
  }
}
