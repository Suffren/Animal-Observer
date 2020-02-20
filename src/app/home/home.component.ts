import { Component, OnInit } from '@angular/core';
import { ReportService } from '../shared/services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animalIsSelected: boolean = false;
  form: object = {};  
  animalType: string;
  previousAnimal: string;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit(): void {   }

  showForm(animalType: string): void {
    this.animalType = animalType;
    this.animalIsSelected = true;
  }

  addReport(form: object): void {
    this.form = form;   
    this.reportService.updateReports({ animal_type: this.animalType, ...this.form });
  }
}