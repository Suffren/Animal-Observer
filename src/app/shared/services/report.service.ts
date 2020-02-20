import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reports = [];

  constructor() { }

  updateReports(report: Object) {
    this.reports.push(report);
  }

  getReports() {
    return this.reports;
  }
}
