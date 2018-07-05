import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {ApplicationService} from '../services/application.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() dashboardActive: boolean;
  @Input() usersActive: boolean;
  @Input() assocsActive: boolean;
  @Input() prohsActive: boolean;
  @Input() analyticsActive: boolean;
  @Input() homepageActive: boolean;
  @Input() posActive: boolean;

  constructor(private render: Renderer2, private appService: ApplicationService) {}

  openGo(el) {
    this.render.addClass(el, 'reveal');
  }

  closeGo(el) {
    this.render.removeClass(el, 'reveal');
  }

  openEGrant () {
    this.appService.openEGrant();
  }

  openEmployeeRecords () {
    this.appService.openEmployeeRecords();
  }

  openMedicalRecords () {
    this.appService.openMedicalRecords();
  }
}
