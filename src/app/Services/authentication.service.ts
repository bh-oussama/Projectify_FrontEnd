import {UserService} from './user.service';
import {Config} from '../Shared/Config';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
  }

  login(login: FormGroup) {
    return this.http.post<any>(Config.apiUrl + '/user/login', login.value);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
