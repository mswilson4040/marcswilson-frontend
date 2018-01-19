import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  public error: Error = new Error();
  constructor(private _matDialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    if (data.error) {
      this.error = data.error;
    } else {
      this.error = data;
    }
  }

  ngOnInit() {
  }
  closeDialog(): void {
    this._matDialogRef.close();
  }

}
