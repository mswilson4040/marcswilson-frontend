import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../../../models/admin/user';
import { UserRoles } from '../../../../enums/user-roles.enum';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  public user: User = new User();
  public userRoles = UserRoles;
  public password: string = null;
  public confirmPassword: string = null;

  constructor(private _matDialogRef: MatDialogRef<UserDialogComponent>) { }

  ngOnInit() {
    this._matDialogRef.updateSize('400px', '500px');
  }
  create(): void {
    const passwordConfirmed = this.password.length > 6 && (this.password === this.confirmPassword);
    if (this.user.name && this.user.email && this.user.role !== null && passwordConfirmed) {
      this.user.passwordHash = this.encrypt();
      this.user.created = new Date();
      this._matDialogRef.close(this.user);
    }
  }
  cancel(): void {
    this._matDialogRef.close(null);
  }
  encrypt(): string {
    const cipherText = CryptoJS.AES.encrypt(this.password, environment.clientKey);
    return cipherText.toString();
    // const bytes = CryptoJS.AES.decrypt(cipherText, 'test1');
    // const plainText = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(plainText);
  }
}
