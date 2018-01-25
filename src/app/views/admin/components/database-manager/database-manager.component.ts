import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DatabaseManagerService } from '../../services/database-manager.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../../../shared-components/dialogs/error-dialog/error-dialog.component';
import { DatabaseSelectorDialogComponent } from '../../dialogs/database-selector-dialog/database-selector-dialog.component';
import { Database } from '../../../../models/admin/database';
import { SocketService } from '../../../../shared-services/socket.service';
import { NewDatabaseDialogComponent } from '../../dialogs/new-database-dialog/new-database-dialog.component';
import { UIService } from '../../../../shared-services/ui.service';

@Component({
  selector: 'app-database-manager',
  templateUrl: './database-manager.component.html',
  styleUrls: ['./database-manager.component.scss']
})
export class DatabaseManagerComponent implements OnInit, AfterViewInit {
  public database: Database = null;
  public connectionCount = 0;
  public progress = 0;
  constructor(private _databaseManagerService: DatabaseManagerService, private _matDialog: MatDialog,
              private _changeDetectorRef: ChangeDetectorRef, private _socketService: SocketService,
              private _uiService: UIService) {
  }

  ngOnInit() {
    this._socketService.connections.subscribe( connectionCount => {
      this.connectionCount = connectionCount;
    });
  }
  ngAfterViewInit(): void {
    setTimeout( () => {
      this.selectDatabase();
    });
  }
  selectDatabase(): void {
    const dlg = this._matDialog.open(DatabaseSelectorDialogComponent);
    dlg.afterClosed().subscribe( _db => {
      if (_db && _db.create === false) {
        this.database = _db.db;
        this._databaseManagerService.getCollections(this.database).then( _collections => {
          this.database.collections = _collections;
        }, error => {
          this._matDialog.open(ErrorDialogComponent, { data: error });
        });
      } else if (_db && _db.create === true) {
        const dlgRef = this._matDialog.open(NewDatabaseDialogComponent);
        dlgRef.afterClosed().subscribe( dbName => {
          if (dbName && dbName !== '') {
            this._databaseManagerService.createDatabase(dbName).then( _databases => {
              const db = _databases.find( d => d.name.toLowerCase() === dbName.toLowerCase() );
              this._databaseManagerService.getCollections(db).then( _collections => {
                this.database = db;
                this.database.collections = _collections;
              }, error => {
                this._matDialog.open(ErrorDialogComponent, { data: error });
              });
            }, error => {
              this._matDialog.open(ErrorDialogComponent, { data: error });
            });
          }
        });
      }
    });
  }
  updateDatabase(): void {
    if (this.database && this.database.name === 'mlbstatsdb') {
      this._socketService.socket.emit( 'updateDatabase', {} );
      this._socketService.socket.on( 'progress', data => {
        this.progress = data.progress;
      } );
    }
  }

}
