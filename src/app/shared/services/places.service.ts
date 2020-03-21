import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators'
import Place from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class placesService {

  constructor(
    private http: HttpClient
  ) { }

  search(place: string): Observable<any[]> {
    return  this.http.get<any>(`http://photon.komoot.de/api/?q=${place}&limit=5`).pipe(
      map((res: Place) => {
          return (res ? res.features : []) as any[]
      })
    )
  }
}