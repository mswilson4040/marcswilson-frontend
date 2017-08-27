import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {

  constructor(private _dialogRef: MdDialogRef<EntryDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this._dialogRef.close();
  }

}
