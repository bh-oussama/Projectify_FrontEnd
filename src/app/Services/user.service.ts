import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../Shared/Config';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get(Config.apiUrl + '/authentication/userProfile');
  }

  LoggedIn(): boolean {
    return (localStorage.getItem('token') != null);
  }
}
