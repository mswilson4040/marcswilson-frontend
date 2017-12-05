import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-breakpoint-helper',
  templateUrl: './breakpoint-helper.component.html',
  styleUrls: ['./breakpoint-helper.component.scss']
})
export class BreakpointHelperComponent implements OnInit {

  constructor(private _breakpointObserver: BreakpointObserver) {
    this._breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.WebPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.WebLandscape
    ]).subscribe( result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
