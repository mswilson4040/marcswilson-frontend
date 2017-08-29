import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Company, Entry } from '../../classes/company';
import { TimeTrackerService } from '../../services/time-tracker.service';
import { ErrorDialogComponent } from '../../../../../shared-components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss'],
  providers: [TimeTrackerService]
})
export class EntryDialogComponent implements OnInit {

  public companies: Array<Company> = new Array<Company>();
  public entry: Entry = new Entry();

  constructor(private _dialogRef: MdDialogRef<EntryDialogComponent>, private _timeTrackerService: TimeTrackerService,
              private _dialog: MdDialog) {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }

  ngOnInit() {
    this.entry.date = this.entry.date === null ? new Date() : this.entry.date;
  }
  closeDialog(): void {
    this._dialogRef.close(this.entry);
  }
  cancel(): void {
    this._dialogRef.close(null);
  }

}
