import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from  '../interfaces/interfaces';
import { UserService } from './user.service';
import { ReportService } from './report.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class fakeBackendAuthService implements HttpInterceptor {
  users: User[];

  constructor(
    private userService: UserService,
    private reportService: ReportService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url ==='authentification' && request.method === 'POST') {
      return this.userService.getAll().pipe(
        switchMap( users => {
          let filteredUsers = users.filter(user => {
            return user.email === request.body.email && user.password === request.body.password;
          });

          if (filteredUsers.length) {
            // if login details are valid return status 200 with fake jwt token
            let user = filteredUsers[0];
            let body = {
                id: user.id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                isAdmin: user.isAdmin,
                token: 'fake-jwt-token'
            };

            return of(new HttpResponse({ status: 200, body: body }));
          } else {
            return throwError({ message: 'Email ou mot de passe incorrect' });
          }
        })
      );
    }

    if (request.url ==='register' && request.method === 'POST') {
      return this.userService.getAll().pipe(
        switchMap( users => {
          let filteredUsers = users.filter(user => {
            return user.email === request.body.email;
          });

          if (filteredUsers.length === 0) {
            return of(new HttpResponse({ status: 200, body: request.body }));
          } else {
            return throwError({ message: 'Cet email est déjà associé à un compte' });
          }
        })
      );
    }

    if (request.url.includes('user_reports') && request.method === 'GET') {
      return this.reportService.fetchReports().pipe(
        switchMap( reports => {
          const userId = request.url.match(/\d/)[0];
          let reportsByUserId = reports.filter(report => {
            return report.user_id === parseInt(userId);
          });
          return of(new HttpResponse({ status: 200, body: reportsByUserId }));
        })
      )
    }

    return next.handle(request);
  }
}