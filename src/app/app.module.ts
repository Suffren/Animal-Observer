import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AnimalsInfoModule } from './animals-info/animals-info.module';
import { AddReportModule } from './add-report-center/add-report.module';
import { PipesModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AnimalsInfoModule,
    AddReportModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500, passThruUnknownUrl: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
