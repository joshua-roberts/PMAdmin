import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-box',
  templateUrl: './app-box.component.html',
  styleUrls: ['./app-box.component.css']
})
export class AppBoxComponent implements OnInit {
  @Input() name;
  @Input() symbol;

  constructor() { }

  ngOnInit() {
  }

}
