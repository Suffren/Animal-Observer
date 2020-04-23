import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { AuthService } from '../../auth/auth.service';
import Report from '../../shared/interfaces/interfaces';
import User from '../../shared/interfaces/interfaces';

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
  currentUser: User;

  constructor(
    private reportService: ReportService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUserValue.subscribe( user => this.currentUser = user);
  }

  onPending(event: boolean) {
    this.animalListIsLoading = event;
  }

  selectAnimal(animalType: string): void {
    this.animalType = animalType;
    this.showForm = true;
    this.submitted = false;
  }

  submitReport(form: Report): void {
    this.reportService.addReport({ animal_type: this.animalType, user_id: this.currentUser.id, ...form }).subscribe( res => {
      this.submitted = true;
      this.showForm = false;
    });
  }
}