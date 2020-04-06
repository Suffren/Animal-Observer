import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import  Users  from  '../users.json';
const users = Users;

@Injectable({
  providedIn: 'root'
})
export class fakeBackendAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.endsWith('authentification') && request.method === 'POST') {
      
      let filteredUsers = users.filter(user => {
        return user.email === request.body.email && user.password === request.body.password;
      });

      if (filteredUsers.length) {
        // if login details are valid return status 200 with fake jwt token
        let user = filteredUsers[0];
        let body = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
        };

        return of(new HttpResponse({ status: 200, body: body }));
      } else {
          return throwError({ message: 'Email ou mot de passe incorrect' });
      }
    }

    return next.handle(request);
  }
}