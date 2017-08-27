import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  public error: Error = new Error();
  constructor(private _dialogRef: MdDialogRef<ErrorDialogComponent>) { }

  ngOnInit() {
  }

}
