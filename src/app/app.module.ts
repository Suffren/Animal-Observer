import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AnimalsInfoModule } from './animals-info/animals-info.module';
import { AddReportModule } from './add-report-center/add-report.module';
import { PipesModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

import { fakeBackendAuthService } from './shared/services/fake-backend-auth.service';

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
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FontAwesomeModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500, passThruUnknownUrl: true })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: fakeBackendAuthService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
