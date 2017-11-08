import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(private _mdDialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }
  login(): void {
    this._mdDialogRef.close(true);
  }
  demo(): void {
    this._mdDialogRef.close(false);
  }

}
