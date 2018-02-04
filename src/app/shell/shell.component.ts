import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'jqueryui';
import 'hammerjs';
import { MatSidenav } from '@angular/material';
import { Navbar } from '../models/navbar';
import { UIService } from '../shared-services/ui.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  public navbar: Navbar = new Navbar();
  constructor(private _uiService: UIService) {
  }

  ngOnInit() {
  }
  onNavToggle(state: boolean, sidenav: MatSidenav): void {
    if (state) {
      sidenav.open();
    } else {
      sidenav.close();
    }
  }
  onScroll(evt): void {
    this._uiService.onScroll(evt);
  }

}
