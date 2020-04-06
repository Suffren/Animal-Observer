import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import User from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient) {}

  logout(): void {
    this.isLoggedIn = false;
  }

  login(credentials: User) {
    return this.http.post<User>('authentification', { email: credentials.email, password: credentials.password}).pipe(
      tap( val => this.isLoggedIn = true),
      catchError( (error: HttpErrorResponse) => {
        return throwError(error.message || "Problème de serveur");
      })
    );
  }
}