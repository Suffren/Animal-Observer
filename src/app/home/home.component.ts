import { Component, OnInit } from '@angular/core';
import { ReportService } from '../shared/services/report.service';
import Report from '../shared/interfaces/interfaces';

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

  submitReport(form: Report): void {
    this.reportService.addReport({ animal_type: this.animalType, ...form });
    this.submitted = true;
    this.showForm = false;
  }
}