import { Component, OnInit } from '@angular/core';
import Report from '../shared/interfaces/interfaces';
import { ReportService } from '../shared/services/report.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'en');

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: Array<Report> = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.fetchReports().subscribe( (reports) => {
      this.reports = reports.sort( (previousReport: Report, nextReport: Report) =>
        new Date(nextReport.time).getTime() - new Date(previousReport.time).getTime()
      );
    });
  }

}