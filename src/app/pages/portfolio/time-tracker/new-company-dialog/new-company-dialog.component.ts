import { Component, OnInit } from '@angular/core';
import {Company} from '../classes/company';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-company-dialog',
  templateUrl: './new-company-dialog.component.html',
  styleUrls: ['./new-company-dialog.component.scss']
})
export class NewCompanyDialogComponent implements OnInit {
  public company: Company = new Company();
  constructor(private _dialogRef: MdDialogRef<NewCompanyDialogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    if (this.company.name !== null) {
      this._dialogRef.close(this.company);
    } else {
      this._dialogRef.close(null);
    }
  }

}
