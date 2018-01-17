import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-breakpoint-helper',
  templateUrl: './breakpoint-helper.component.html',
  styleUrls: ['./breakpoint-helper.component.scss']
})
export class BreakpointHelperComponent implements OnInit {
  public shouldShow = true;
  constructor() {
    if (environment.production) {
      this.shouldShow = false;
    }
  }

  ngOnInit() {
  }

}
