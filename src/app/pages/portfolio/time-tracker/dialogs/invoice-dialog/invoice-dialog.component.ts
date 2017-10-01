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
  public billRate = 0.00;
  public invoice: Invoice = null;
  public totalHours = 0;
  public totalCompensation = 0;
  public invoiceDueDate: Date = new Date();
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
        this.totalHours = this.entries.reduce( (accumulator, entry) => accumulator + entry.timeSpent, 0);
        this.totalCompensation = this.billRate * this.totalHours;
      }, error => {
        const edr = this._dialog.open(ErrorDialogComponent);
        edr.componentInstance.error = error;
      });
    }
  }
  onBillRateChange(): void {
    this.totalCompensation = this.billRate * this.totalHours;
  }
  createInvoice(): void {
    this.invoice = new Invoice({
      company: this.company,
      userId: this.authResponse.sub,
      billRate: this.billRate,
      entries: this.entries,
      invoiceDate: new Date(),
      invoiceMonth: this.invoiceMonth,
      invoiceYear: this.invoiceYear,
      invoiceDueDate: this.invoiceDueDate
    });
    this._mdDialogRef.close(this.invoice);
  }
  cancel(): void {
    this._mdDialogRef.close(null);
  }

}
