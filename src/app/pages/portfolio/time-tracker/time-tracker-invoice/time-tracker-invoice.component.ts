import { Component, Input, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { InvoiceDialogComponent } from '../dialogs/invoice-dialog/invoice-dialog.component';
import { TimeTrackerService } from '../services/time-tracker.service';
import { Company } from '../classes/company';
import { ErrorDialogComponent } from '../../../../shared-components/error-dialog/error-dialog.component';
import { AuthenticationResponse } from '../../../../shared-classes/authentication-response';
import { AuthService } from '../../../../shared-services/auth.service';
import { Invoice } from '../classes/invoice';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-time-tracker-invoice',
  templateUrl: './time-tracker-invoice.component.html',
  styleUrls: ['./time-tracker-invoice.component.scss']
})
export class TimeTrackerInvoiceComponent implements OnInit {
  public companies: Array<Company> = new Array<Company>();
  public authResponse: AuthenticationResponse = null;
  public invoices: Array<Invoice> = new Array<Invoice>();
  @Input() selectedTab = 0;

  constructor(private _dialog: MdDialog, private _timeTrackerService: TimeTrackerService, private _authService: AuthService) { }

  ngOnInit() {
    this.authResponse = this._authService.isAuthenticated();
    this._timeTrackerService.getCompanies(this.authResponse.sub).then( companies => {
      this.companies = companies;
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
    this._timeTrackerService.getInvoices(this.authResponse.sub).then( invoices => {
      this.invoices = invoices;
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }
  createInvoice(): void {
    const dialogRef = this._dialog.open(InvoiceDialogComponent);
    dialogRef.componentInstance.companies = this.companies;
    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        this._timeTrackerService.addInvoice(result).then( invoices => {
          if (invoices) {
            this.invoices = invoices;
          }
        }, error => {
          const edr = this._dialog.open(ErrorDialogComponent);
          edr.componentInstance.error = error;
        });
      }
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }
  exportInvoice(invoice: Invoice) {
    this._timeTrackerService.exportInvoice(invoice).then( _invoice => {
      if (_invoice) {

      }
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    })

  }
}
