import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-breakpoint-helper',
  templateUrl: './breakpoint-helper.component.html',
  styleUrls: ['./breakpoint-helper.component.scss']
})
export class BreakpointHelperComponent implements OnInit {
  public shouldShow = true;
  constructor(private _breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

}
