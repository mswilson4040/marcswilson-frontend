import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DatabaseManagerService } from '../../services/database-manager.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../../../shared-components/dialogs/error-dialog/error-dialog.component';
import { DatabaseSelectorDialogComponent } from '../../dialogs/database-selector-dialog/database-selector-dialog.component';
import { Database } from '../../../../models/admin/database';

@Component({
  selector: 'app-database-manager',
  templateUrl: './database-manager.component.html',
  styleUrls: ['./database-manager.component.scss']
})
export class DatabaseManagerComponent implements OnInit, AfterViewInit {
  public database: Database = null;
  constructor(private _databaseManagerService: DatabaseManagerService, private _matDialog: MatDialog,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    setTimeout( () => {
      this.selectDatabase();
    });
  }
  selectDatabase(): void {
    const dlg = this._matDialog.open(DatabaseSelectorDialogComponent);
    dlg.afterClosed().subscribe( _db => {
      if (_db) {
        this.database = _db;
        this._databaseManagerService.getCollections(this.database).then( _collections => {
          this.database.collections = _collections;
        }, error => {
          this._matDialog.open(ErrorDialogComponent, { data: error });
        });
      }
    });
  }
  updateDatabase(): void {
    this._databaseManagerService.updateMlbStatsDb().then( _result => {
      if (_result) {

      }
    }, error => {
      this._matDialog.open(ErrorDialogComponent, { data: error });
    });
  }

}