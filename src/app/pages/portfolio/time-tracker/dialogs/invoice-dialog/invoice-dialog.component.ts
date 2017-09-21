import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { AuthenticationResponse } from '../../../../../shared-classes/authentication-response';
import { AuthService } from '../../../../../shared-services/auth.service';
import { Company, Entry } from '../../classes/company';
import { ErrorDialogComponent } from '../../../../../shared-components/error-dialog/error-dialog.component';
import { Invoice } from '../../classes/invoice';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {
  public invoiceMonth: number = null;
  public invoiceYear: number = new Date().getFullYear();
  public authResponse: AuthenticationResponse = null;
  public entries: Array<Entry> = new Array<Entry>();
  public company: Company = null;
  public companies: Array<Company> = new Array<Company>();
  public billRate: number = null;
  public invoice: Invoice = null;
  constructor(private _mdDialogRef: MdDialogRef<InvoiceDialogComponent>, private _timeTrackerService: TimeTrackerService,
              private _authService: AuthService, private _dialog: MdDialog) {
  }

  ngOnInit() {
    this.authResponse = this._authService.isAuthenticated();
    this._mdDialogRef.updateSize('30%', '60%');
  }
  getInvoiceEntries(): void {
    if (this.invoiceMonth && this.invoiceYear) {
      const start = new Date(this.invoiceYear, +this.invoiceMonth, 1);
      const lastDay = new Date(this.invoiceYear, +this.invoiceMonth + 1, 0);
      this._timeTrackerService.getEntriesByDateRangeAndCompanyId(start, lastDay, this.company).then( entries => {
        this.entries = entries;
      }, error => {
        const edr = this._dialog.open(ErrorDialogComponent);
        edr.componentInstance.error = error;
      });
    }
  }
  createInvoice(): void {
    this.invoice = new Invoice({
      company: this.company,
      billRate: this.billRate,
      entries: this.entries,
    });
    this._mdDialogRef.close(this.invoice);
  }
  cancel(): void {
    this._mdDialogRef.close(null);
  }

}
