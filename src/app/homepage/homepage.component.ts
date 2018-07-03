import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  openEGrant () {
    alert('open E-grant');
  }

  openEmployeeRecords () {
    alert('open Employee Records');
  }

  openMedicalRecords () {
    alert('open Medical Records');
  }
  openEmail () {
    alert('open E-Mail');
  }
}
