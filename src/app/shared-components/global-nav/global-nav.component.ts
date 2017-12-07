import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss']
})
export class GlobalNavComponent implements OnInit {
  @Output() onToggleNav: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }
  toggleNav(): void {
    this.onToggleNav.emit(true);
  }
}
