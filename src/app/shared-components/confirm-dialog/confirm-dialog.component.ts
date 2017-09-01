import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  public message: string = null;
  constructor(private _mdDialogRef: MdDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(result: boolean): void {
    this._mdDialogRef.close(result);
  }

}
