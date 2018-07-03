import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() root;
  @Input() level;
  @Output() eleClicked = new EventEmitter<any>();
  colors = ['#e5f1ff', '#d3e7ff', '#bad9ff', '#a3ccff', '#8ec0ff', '#7ab5ff', '#5ba4ff', '#3f94ff', '#2887ff', '#167dff'];

  constructor() { }

  ngOnInit() {
  }

  onClick (childRoot, event) {
    this.eleClicked.emit([childRoot, event]);
  }
}
