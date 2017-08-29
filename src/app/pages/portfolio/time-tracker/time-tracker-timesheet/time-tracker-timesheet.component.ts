import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TimeTrackerService } from '../services/time-tracker.service';
import { Company } from '../classes/company';
import { MdDialog} from '@angular/material';
import { EntryDialogComponent } from '../dialogs/entry-dialog/entry-dialog.component';

@Component({
  selector: 'app-time-tracker-timesheet',
  templateUrl: './time-tracker-timesheet.component.html',
  styleUrls: ['./time-tracker-timesheet.component.scss']
})
export class TimeTrackerTimesheetComponent implements OnInit, AfterViewInit {

  public companies: Array<Company> = new Array<Company>();
  public currentDate: Date = new Date();
  public selectedIndex = 0;
  public selectedCompany: Company = null;
  constructor(private _timeTrackerService: TimeTrackerService, private _dialog: MdDialog) {
  }

  ngOnInit() {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      alert(error.message);
    });
  }
  ngAfterViewInit(): void {
  }
  addNewEntry(): void {
    const dialogRef = this._dialog.open(EntryDialogComponent);
    dialogRef.afterClosed().subscribe( entry => {
      if (entry) {
        this._timeTrackerService.addEntry(this.selectedCompany, entry).then( companies => {
          if (companies) {

          }
        });
      } else {

      }
    });
  }

}
