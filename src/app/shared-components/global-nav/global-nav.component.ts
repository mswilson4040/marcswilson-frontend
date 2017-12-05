import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {

  constructor(private _breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }
}
