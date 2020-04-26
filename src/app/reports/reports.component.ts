import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Report from '../shared/interfaces/interfaces';
import User from '../shared/interfaces/interfaces';

import { ReportService } from '../shared/services/report.service';
import { AuthService } from '../auth/auth.service';

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
  currentUser: User;
  currentUrl: string;

  constructor(
    private reportService: ReportService,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getReports();
  }

  getReports() {
    this.currentUrl = this.route.url;

    this.authService.currentUserValue.subscribe( user => {
      this.currentUser = user;

      if(this.currentUser.isAdmin === 'true' && this.currentUrl === '/admin/reports') {
        this.reportService.fetchReports().pipe(
          tap(reports => this.isLoading = false)
        ).subscribe( (reports) => {
          this.reports = this.reportsByDate(reports);
        });
      } else {
        this.reportService.getReportsByUser(this.currentUser.id).pipe(
          tap(reports => this.isLoading = false)
        ).subscribe( (reports) => {
          this.reports = this.reportsByDate(reports);
        });
      }

    });
  }

  reportsByDate(reports: Report[]): Report[] {
    return reports.sort( (previousReport: Report, nextReport: Report) =>
      new Date(nextReport.time).getTime() - new Date(previousReport.time).getTime()
    );
  }

  deleteReport(report: Report) {
    let confirm = window.confirm('Êtes-vous sûr de vouloir supprimer cette observation ?');
    console.log(report)
    if(confirm) {
      this.reportService.deleteReport(report.id).subscribe( () => {
        this.getReports();
      });
    }
  }
}