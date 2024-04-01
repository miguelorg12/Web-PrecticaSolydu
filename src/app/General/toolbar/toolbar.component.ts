import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private location: Location) { }
  goBack() {
    this.location.back();
  }
}
