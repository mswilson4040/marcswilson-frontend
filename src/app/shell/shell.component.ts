import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'jqueryui';
import 'hammerjs';
import { AuthService } from '../shared-services/auth.service';
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
  constructor(private _authService: AuthService, private _uiService: UIService) {
    this._authService.handleAuthentication();
  }

  ngOnInit() {
    if (window.location.href.indexOf('localhost') === -1) {
      $('#mediaHelper').remove();
    }
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
