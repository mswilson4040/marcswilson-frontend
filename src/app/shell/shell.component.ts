import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'jqueryui';
import 'hammerjs';
import { AuthService } from '../shared-services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(private _authService: AuthService) {
    this._authService.handleAuthentication();
  }

  ngOnInit() {
    if (window.location.href.indexOf('localhost') === -1) {
      $('#mediaHelper').remove();
    }

  }

}
