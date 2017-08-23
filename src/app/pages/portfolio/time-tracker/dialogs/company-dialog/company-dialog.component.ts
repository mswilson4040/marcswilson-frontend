import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {

  constructor(private _dialogRef: MdDialogRef<CompanyDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(): void {
    this._dialogRef.close();
  }
}
