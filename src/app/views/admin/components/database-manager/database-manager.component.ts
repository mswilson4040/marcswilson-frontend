import { Component, OnInit } from '@angular/core';
import { DatabaseManagerService } from '../../services/database-manager.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../../../shared-components/dialogs/error-dialog/error-dialog.component';

@Component({
  selector: 'app-database-manager',
  templateUrl: './database-manager.component.html',
  styleUrls: ['./database-manager.component.scss']
})
export class DatabaseManagerComponent implements OnInit {
  public databases: any[] = [];
  constructor(private _databaseManagerService: DatabaseManagerService, private _matDialog: MatDialog) { }

  ngOnInit() {
    this.getDatabases();
  }
  getDatabases(): Promise<any[]> {
    return new Promise( (resolve, reject) => {
      this._databaseManagerService.getDatabases().then( _databases => {
        this.databases = _databases;
      }, error => {
        this._matDialog.open(ErrorDialogComponent, { data: error });
      });
    });
  }

}
