import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Report from '../interfaces/interfaces';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  cahedReports: Array<Report> = [];
  reportsUrl = 'api/reports';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  fetchReports() {
    return this.http.get<Report[]>(this.reportsUrl);
  }

  getReport(id: number): Observable<Report> {
    const url = `${this.reportsUrl}/${id}`;
    return this.http.get<Report>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Report>(`getReport id=${id}`))
    );
  }

  updateReport (report: Report): Observable<Report> {
    return this.http.put<Report>(this.reportsUrl, report, this.httpOptions).pipe(
      tap(_ => console.log(`updated report id=${report.id}`)),
      catchError(this.handleError<Report>('updateReport'))
    );
  }

  addReport (report: Report): Observable<Report> {
    return this.http.post<Report>(this.reportsUrl, report, this.httpOptions).pipe(
      tap((newReport: Report) => console.log(`added report w/ id=${newReport.id}`)),
      catchError(this.handleError<Report>('addReport'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
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