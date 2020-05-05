import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    usersUrl = 'api/users';
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(`${this.usersUrl}`);
    }

    getById(userId: number): Observable<User> {
      const url = `${this.usersUrl}/${userId}`;
      return this.http.get<User>(url).pipe(
        tap(user_id => console.log(`get user by his id=${user_id}`)),
        catchError(this.handleError<User>(`getById id=${userId}`))
      );
    }

    register(user: User): Observable<User> {
      return this.http.post(this.usersUrl, user, this.httpOptions).pipe(
        tap((newUser: User) => console.log(`register user id=${newUser.id}`)),
        catchError(this.handleError<User>('register'))
      );
    }

    update(user: User): Observable<User> {
      const url = `${this.usersUrl}/${user.id}`;
      return this.http.put(url, user, this.httpOptions).pipe(
        tap((user: User) => console.log(`update user w/ id=${user.id}`)),
        catchError(this.handleError<User>('update'))
      );
    }

    delete(id: number): Observable<User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.delete(url).pipe(
        tap((user: User) => console.log(`delete user id=${user.id}`)),
        catchError(this.handleError<User>('delete'))
      );
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