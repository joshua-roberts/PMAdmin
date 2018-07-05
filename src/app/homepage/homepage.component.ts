import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../services/application.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private appService: ApplicationService) { }

  ngOnInit() {
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
