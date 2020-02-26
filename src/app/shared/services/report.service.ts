import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Report from '../interfaces/interfaces';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reports: Array<Report> = [];
  cachedReports = 'assets/reports.json';

  constructor(private http: HttpClient) { }

  fetchReports(): Subscription {
    return this.http.get(this.cachedReports).subscribe( (data: Array<Report>) => this.reports = data);
  }

  addReport(report: Report) {
    this.reports.push(report);
  }

  getReports() {
    return this.reports;
  }
}
