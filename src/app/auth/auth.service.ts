import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import User from '../shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string;
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(credentials: User) {
    return this.http.post<User>('authentification', { email: credentials.email, password: credentials.password}).pipe(
      tap( val => this.loggedIn.next(true)),
      catchError( (error: HttpErrorResponse) => {
        return throwError(error.message || "Problème de serveur");
      })
    );
  }
}