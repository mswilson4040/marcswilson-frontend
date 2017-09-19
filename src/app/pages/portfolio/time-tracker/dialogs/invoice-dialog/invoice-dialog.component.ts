import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TimeTrackerService } from '../../services/time-tracker.service';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {
  public invoiceMonth: number = null;
  public invoiceYear: number = new Date().getFullYear();
  constructor(private _mdDialogRef: MdDialogRef<InvoiceDialogComponent>, private _timeTrackerService: TimeTrackerService) {
  }

  ngOnInit() {
  }
  getInvoiceEntries(): void {
    if (this.invoiceMonth && this.invoiceYear) {
      const date = new Date(this.invoiceYear, this.invoiceMonth, 1);
      const lastDay = new Date(this.invoiceYear, this.invoiceMonth + 1, 0);
    }
  }

}
