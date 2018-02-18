import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../shared-services/auth.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../shared-components/dialogs/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = null;
  public password: string = null;
  constructor(private _authService: AuthService, private _matDialog: MatDialog, private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( _params => {
      if (_params ) {
        this.username = _params.email;
      }
    });
  }
  login(): void {
    if (this.username && this.password) {
      const pass = CryptoJS.AES.encrypt(this.password, environment.clientKey).toString();
      this._authService.login(this.username, pass.toString()).then( _user => {
        if (_user) {
          this._authService.user = _user;
          this._router.navigate(['/home']); // TODO: Callback route
        } else {
          this._authService.user = null;
        }
      }, error => {
        this._matDialog.open(ErrorDialogComponent, { data: error });
      });
    }
  }
  enterHandler(evt): void {
    if (evt.keyCode === 13) {
      this.login();
    }
  }
}
