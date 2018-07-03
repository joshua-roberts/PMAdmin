import {Component, OnInit} from '@angular/core';
import * as data from './pos.json';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})

export class PosComponent implements OnInit {
  pos = data;
  selectedDoc = this.pos.name;

  constructor() { }

  ngOnInit() {
  }

  onDocClick (name) {
    this.selectedDoc = name[1].srcElement.innerText.split('\n')[0];
  }
}
