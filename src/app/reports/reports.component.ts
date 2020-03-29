import { Component, OnInit } from '@angular/core';
import Report from '../shared/interfaces/interfaces';
import { ReportService } from '../shared/services/report.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { tap } from "rxjs/operators";

registerLocaleData(localeFr, 'en');

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: Array<Report> = [];
  isLoading: boolean;
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.reportService.fetchReports().pipe(
      tap(reports => this.isLoading = false)
    ).subscribe( (reports) => {
      this.reports = reports.sort( (previousReport: Report, nextReport: Report) =>
        new Date(nextReport.time).getTime() - new Date(previousReport.time).getTime()
      );
    });
  }
}