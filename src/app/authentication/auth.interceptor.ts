import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const login = '/login';
    const register = '/register';
// Exclude interceptor for login request:
    if ((req.url.search(login) === -1 ) && (req.url.search(register) === -1 )) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return next.handle(clonedReq).pipe(
        tap(
          succ => { },
          err => {
            if (err.status === 401) {
              localStorage.removeItem('token');
              this.router.navigateByUrl('/login');
            }
          }
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }
}
