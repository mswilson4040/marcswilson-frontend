import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../shared-services/auth.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../shared-components/dialogs/error-dialog/error-dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = null;
  public password: string = null;
  constructor(private _authService: AuthService, private _matDialog: MatDialog) { }

  ngOnInit() {
  }
  login(): void {
    if (this.username && this.password) {
      this.password = CryptoJS.AES.encrypt(this.password, environment.clientKey).toString();
      this._authService.login(this.username, this.password).then( _result => {
        console.log(_result);
      }, error => {
        this._matDialog.open(ErrorDialogComponent, { data: error });
      });
    }
  }
}
