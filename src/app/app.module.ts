import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PmService} from './services/pm.service';
import {FormsModule} from '@angular/forms';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './services/alert.service';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { AssociationsComponent } from './associations/associations.component';
import { ProhibitionsComponent } from './prohibitions/prohibitions.component';
import { NLPMComponent } from './nlpm/nlpm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PosComponent } from './pos/pos.component';
import { ListComponent } from './pos/list/list.component';
import { AppBoxComponent } from './app-box/app-box.component';
import {ApplicationService} from './services/application.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    NavBarComponent,
    AssociationsComponent,
    ProhibitionsComponent,
    NLPMComponent,
    DashboardComponent,
    UsersComponent,
    AnalyticsComponent,
    HomepageComponent,
    PosComponent,
    ListComponent,
    AppBoxComponent
  ],
  providers: [
    PmService,
    AlertService,
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
