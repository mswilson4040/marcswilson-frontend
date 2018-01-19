import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DatabaseManagerService } from '../../services/database-manager.service';
import { ErrorDialogComponent } from '../../../../shared-components/dialogs/error-dialog/error-dialog.component';
import { Database } from '../../../../models/admin/database';

@Component({
  selector: 'app-database-selector-dialog',
  templateUrl: './database-selector-dialog.component.html',
  styleUrls: ['./database-selector-dialog.component.scss'],
  providers: [ DatabaseManagerService ]
})
export class DatabaseSelectorDialogComponent implements OnInit, AfterViewInit {
  public databases: Database[] = [];
  constructor(private _matDialogRef: MatDialogRef<DatabaseSelectorDialogComponent>,
              private _databaseManagerService: DatabaseManagerService, private _matDialog: MatDialog) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this._databaseManagerService.getDatabases().then( _databases => {
      this.databases = _databases;
    }, error => {
      this._matDialogRef.close(null);
      this._matDialog.open(ErrorDialogComponent, { data: error });
    });
  }
  openDatabase(database): void {
    this._matDialogRef.close(database);
  }

}
