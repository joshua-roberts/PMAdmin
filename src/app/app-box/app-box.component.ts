import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-box',
  templateUrl: './app-box.component.html',
  styleUrls: ['./app-box.component.css']
})
export class AppBoxComponent implements OnInit {
  @Input() name;
  @Input() symbol;
  @Input() description;
  @Input() color;

  constructor() { }

  ngOnInit() {
    this.color = this.getColor();
  }

  getColor() {
    if (this.color) {
      console.log(this.color);
      return this.color;
    } else {
      let color = (Math.floor((Math.random() * 16777215)).toString(16)).padStart(6, '0');

      console.log(color)
      return '#' + color;
    }
  }
}
