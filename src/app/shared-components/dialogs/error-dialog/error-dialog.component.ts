import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  public error: Error = new Error();
  public message: string = null;
  public type: string = null;
  constructor(private _matDialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    if (data.name) {
      switch (data.name) {
        case 'HttpErrorResponse':
          this.message = data.message;
          this.type = `${data.name} - ${data.status}`;
          break;
        default:
          this.message = 'Error type not covered.';
      }
    } else {
      this.message = 'Error type not covered';
    }
  }

  ngOnInit() {
  }
  closeDialog(): void {
    this._matDialogRef.close();
  }

}
