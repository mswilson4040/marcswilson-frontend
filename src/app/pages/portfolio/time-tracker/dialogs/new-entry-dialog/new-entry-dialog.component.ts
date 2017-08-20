import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Entry, Project} from '../../classes/company';

@Component({
  selector: 'app-new-entry-dialog',
  templateUrl: './new-entry-dialog.component.html',
  styleUrls: ['./new-entry-dialog.component.scss']
})
export class NewEntryDialogComponent implements OnInit {
  public entry: Entry = new Entry();
  public projects: Array<Project> = new Array<Project>();
  constructor(private _dialogRef: MdDialogRef<NewEntryDialogComponent>) {
  }

  ngOnInit() {
  }
  closeDialog(): void {
    this._dialogRef.close(this.entry);
  }
  cancel(): void {
    this._dialogRef.close(null);
  }
}
