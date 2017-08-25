import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Company } from '../../classes/company';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {
  public company: Company = new Company();
  constructor(private _dialogRef: MdDialogRef<CompanyDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(company: Company): void {
    this._dialogRef.close(company);
  }
  addCompany(): void {
    this.closeDialog(this.company);
  }
  cancel(): void {
    this.closeDialog(null);
  }
}
