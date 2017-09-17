import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Company } from '../../classes/company';
import { AuthenticationResponse } from '../../../../../shared-classes/authentication-response';
import { AuthService } from '../../../../../shared-services/auth.service';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {
  public company: Company = new Company();
  public authResponse: AuthenticationResponse = new AuthenticationResponse();
  constructor(private _dialogRef: MdDialogRef<CompanyDialogComponent>) {

  }

  ngOnInit() {
  }
  closeDialog(company: Company): void {
    this._dialogRef.close(company);
  }
  addCompany(): void {
    this.company.userId = this.authResponse.sub;
    this.closeDialog(this.company);
  }
  cancel(): void {
    this.closeDialog(null);
  }
}
