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
    this.reports = this.reportService.getReports();
  }

}
