import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../../services/user-manager.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../../../shared-components/dialogs/error-dialog/error-dialog.component';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _userManagerService: UserManagerService, private _matDialog: MatDialog) { }

  ngOnInit() {
  }
  createUser(): void {
    const dialogRef = this._matDialog.open(UserDialogComponent);
    dialogRef.afterClosed().subscribe( _user => {
      this._userManagerService.createUser(_user).then( users => {

      }, error => {
        this._matDialog.open(ErrorDialogComponent, { data: error });
      });
    });
  }

}
