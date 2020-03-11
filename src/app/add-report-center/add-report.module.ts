import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AnimalListComponent } from './animal-list/animal-list.component';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportFormComponent } from './report-form/report-form.component';

import { AddReportRoutingModule } from './add-report-routing.module';

@NgModule({
  declarations: [
    AnimalListComponent,
    ReportHomeComponent,
    ReportFormComponent
  ],
  imports: [
    CommonModule,
    AddReportRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddReportModule { }
