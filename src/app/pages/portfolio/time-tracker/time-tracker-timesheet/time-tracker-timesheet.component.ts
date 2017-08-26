import { Component, OnInit } from '@angular/core';
import {TimeTrackerService} from '../services/time-tracker.service';
import {Company} from '../classes/company';

@Component({
  selector: 'app-time-tracker-timesheet',
  templateUrl: './time-tracker-timesheet.component.html',
  styleUrls: ['./time-tracker-timesheet.component.scss']
})
export class TimeTrackerTimesheetComponent implements OnInit {

  public companies: Array<Company> = new Array<Company>();
  public currentDate: Date = new Date();
  constructor(private _timeTrackerService: TimeTrackerService) { }

  ngOnInit() {
    this._timeTrackerService.getCompanies().then( companies => {
      this.companies = companies;
    }, error => {
      alert(error.message);
    });
  }

}
