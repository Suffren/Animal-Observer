import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsInfoModuleModule } from './animals-info/animals-info.module'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReportsComponent } from './reports/reports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    ReportHomeComponent,
    ReportFormComponent,
    ReportsComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AnimalsInfoModuleModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
