import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import User from '../interfaces/interfaces';

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
      return this.http.post(this.reportsUrl, user, this.httpOptions);
    }

    update(user: User) {
      const url = `${this.reportsUrl}/${user.id}`;
      return this.http.put(url, user, this.httpOptions);
    }

    delete(id: number) {
      const url = `${this.reportsUrl}/${id}`;
      return this.http.delete(url);
    }
}