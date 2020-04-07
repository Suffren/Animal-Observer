import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ReportHomeComponent } from './report-home/report-home.component';

const routes: Routes = [
  {
    path: 'report',
    canActivate: [AuthGuard],
    component: ReportHomeComponent,
    data: { title: 'Ajouter une observation' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddReportRoutingModule { }
