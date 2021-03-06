import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManagerService } from '../../../../shared-services/user-manager.service';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { ErrorDialogComponent } from '../../../../shared-components/dialogs/error-dialog/error-dialog.component';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { User } from '../../../../models/admin/user';
import { UserRoles } from '../../../../enums/user-roles.enum';
import { ConfirmDialogComponent } from '../../../../shared-components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public userRoles = UserRoles;
  public dataSource: MatTableDataSource<User> = null;
  public displayColumns: string[] = ['name', 'email', 'role', 'created', 'options'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _userManagerService: UserManagerService, private _matDialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }
  createUser(): void {
    const dialogRef = this._matDialog.open(UserDialogComponent);
    dialogRef.afterClosed().subscribe( _user => {
      if (_user) {
        this._userManagerService.createUser( _user ).then( user => {
          this.dataSource = new MatTableDataSource<User>( user );
        }, error => {
          this._matDialog.open( ErrorDialogComponent, { data: error } );
        } );
      }
    });
  }
  async deleteUser(user: User) {
    const dialogRef = this._matDialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe( async _result => {
      if (_result) {
        const deleteUser = await this._userManagerService.deleteUser(user);
        if (deleteUser && deleteUser.ok) {
          this.getUsers();
        } else {
          this._matDialog.open(ErrorDialogComponent, { data: new Error(`User ${user.name} cannot be deleted.`)});
        }
      }
    });
  }
  getUsers(): void {
    this._userManagerService.getUsers().then( _users => {
      this.users = _users;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.sort = this.sort;
    }, error => {
      this._matDialog.open( ErrorDialogComponent, { data: error });
    });
  }
}
