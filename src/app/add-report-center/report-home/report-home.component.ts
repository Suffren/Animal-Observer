import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import Report from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.scss']
})
export class ReportHomeComponent implements OnInit {
  showForm: boolean = false;
  submitted: boolean = false;
  animalListIsLoading: boolean = true;
  animalType: string;
  previousAnimal: string;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void { }

  onPending(event: boolean) {
    this.animalListIsLoading = event;
  }

  selectAnimal(animalType: string): void {
    this.animalType = animalType;
    this.showForm = true;
    this.submitted = false;
  }

  submitReport(form: Report): void {
    this.reportService.addReport({ animal_type: this.animalType, ...form }).subscribe( res => {
      this.submitted = true;
      this.showForm = false;
    });
  }
}