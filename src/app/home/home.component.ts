import { Component, OnInit } from '@angular/core';
import { ReportService } from '../shared/services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showForm: boolean = false;
  submitted: boolean = false;
  animalType: string;
  previousAnimal: string;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void { }

  selectAnimal(animalType: string): void {
    this.animalType = animalType;
    this.showForm = true;
    this.submitted = false;
  }

  submitReport(form: object): void {
    this.reportService.updateReports({ animal_type: this.animalType, ...form });
    this.submitted = true;
    this.showForm = false;
  }
}