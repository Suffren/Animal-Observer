import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    reportsUrl = 'api/users';
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getAll() {
      return this.http.get<User[]>(`${this.reportsUrl}`);
    }

    getById(id: number) {
      const url = `${this.reportsUrl}/${id}`;
      return this.http.get<User>(url);
    }

    register(user: User) {
      return this.http.post(this.reportsUrl, user, this.httpOptions).pipe(
        tap((newUser: User) => console.log(`added user w/ id=${newUser.id}`)),
        catchError(this.handleError<User>('addUser'))
      );
    }

    update(user: User) {
      const url = `${this.reportsUrl}/${user.id}`;
      return this.http.put(url, user, this.httpOptions);
    }

    delete(id: number) {
      const url = `${this.reportsUrl}/${id}`;
      return this.http.delete(url);
    }

    private handleError<T> (operation = 'operation', result?: T) { // TODO: create a specific service
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error);

        // TODO: transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}