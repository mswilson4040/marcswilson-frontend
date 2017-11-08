import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  // TODO: Update this so that the error is injected rather than set after the fact
  public error: Error = new Error();
  constructor(private _dialogRef: MatDialogRef<ErrorDialogComponent>) { }

  ngOnInit() {
  }

}
