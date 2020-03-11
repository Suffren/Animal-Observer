import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Animal from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  animalsUrl = 'api/animals';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAnimalByTypeName(animal_type: string): Observable<Animal> {
    const url = `${this.animalsUrl}/?name=${animal_type}`;
    return this.http.get<Animal>(url);
  }
}