import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-database-dialog',
  templateUrl: './new-database-dialog.component.html',
  styleUrls: ['./new-database-dialog.component.scss']
})
export class NewDatabaseDialogComponent implements OnInit {
  public databaseName: string = null;
  constructor(private _matDialogRef: MatDialogRef<NewDatabaseDialogComponent>, private _matDialog: MatDialog) { }

  ngOnInit() {
  }
  cancel(): void {
    this._matDialogRef.close(null);
  }
  createDatabase(): void {
    this._matDialogRef.close(this.databaseName);
  }
}
