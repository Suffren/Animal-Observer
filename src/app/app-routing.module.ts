import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Ajouter une observation' }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: { title: 'Mes observations' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
