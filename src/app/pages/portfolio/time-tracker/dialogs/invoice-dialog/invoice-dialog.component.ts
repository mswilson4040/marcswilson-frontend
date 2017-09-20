import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { AuthenticationResponse } from '../../../../../shared-classes/authentication-response';
import { AuthService } from '../../../../../shared-services/auth.service';
import { Entry } from '../../classes/company';

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
  constructor(private _mdDialogRef: MdDialogRef<InvoiceDialogComponent>, private _timeTrackerService: TimeTrackerService,
              private _authService: AuthService) {
  }

  ngOnInit() {
    this.authResponse = this._authService.isAuthenticated();
    this._mdDialogRef.updateSize('20%', '40%');
  }
  getInvoiceEntries(): void {
    if (this.invoiceMonth && this.invoiceYear) {
      const start = new Date(this.invoiceYear, +this.invoiceMonth, 1);
      const lastDay = new Date(this.invoiceYear, +this.invoiceMonth + 1, 0);
      this._timeTrackerService.getEntriesByUserIdAndDateRange(start, lastDay, this.authResponse.sub).then( entries => {
        this.entries = entries;
      });
    }
  }

}
