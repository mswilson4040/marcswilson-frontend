import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { InvoiceDialogComponent } from '../dialogs/invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-time-tracker-invoice',
  templateUrl: './time-tracker-invoice.component.html',
  styleUrls: ['./time-tracker-invoice.component.scss']
})
export class TimeTrackerInvoiceComponent implements OnInit {

  constructor(private _dialog: MdDialog) { }

  ngOnInit() {
  }
  createInvoice(): void {
    const dialogRef = this._dialog.open(InvoiceDialogComponent);
    dialogRef.afterClosed().subscribe( result => {

    });
  }
}
