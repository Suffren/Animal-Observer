import { Component } from '@angular/core';
import { ReportService } from './shared/services/report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Animal observer';

  constructor(private reportService: ReportService)  {
    this.reportService.fetchReports();
  }

}
