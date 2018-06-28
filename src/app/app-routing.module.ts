import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AssociationsComponent} from './associations/associations.component';
import {ProhibitionsComponent} from './prohibitions/prohibitions.component';
import {NLPMComponent} from './nlpm/nlpm.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'associations', component: AssociationsComponent },
  { path: 'prohibitions', component: ProhibitionsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'nlpm', component: NLPMComponent },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
