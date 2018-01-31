import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../../../models/admin/user';
import { UserRoles } from '../../../../enums/user-roles.enum';

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
  }
  create(): void {
    if (this.user.name && this.user.email && this.user.role !== null) {
      this.user.created = new Date();
      this._matDialogRef.close(this.user);
    }
  }
  cancel(): void {
    this._matDialogRef.close(null);
  }
  bcrypt(): void {
  }
}
