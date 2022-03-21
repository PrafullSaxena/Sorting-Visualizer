import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorting-visual';

  constructor() { }

}
