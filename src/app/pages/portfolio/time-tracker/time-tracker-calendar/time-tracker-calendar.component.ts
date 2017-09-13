import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarDay } from '../classes/calendar';
import { TimeTrackerService } from '../services/time-tracker.service';
import { MdDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../../../shared-components/error-dialog/error-dialog.component';
import { Entry } from '../classes/company';

@Component({
  selector: 'app-time-tracker-calendar',
  templateUrl: './time-tracker-calendar.component.html',
  styleUrls: ['./time-tracker-calendar.component.scss']
})
export class TimeTrackerCalendarComponent implements OnInit {
  public todaysDate: Date = new Date();
  public calendarDays: Array<CalendarDay> = new Array<CalendarDay>();
  public activeMonth: Date = new Date();
  public calendar: Calendar = new Calendar();
  public activeMonthName: string = this.calendar.getMonthName(this.activeMonth.getMonth());

  constructor(private _timetrackerService: TimeTrackerService, private _dialog: MdDialog) {
    this.calendarDays = this.calendar.getCalendarDays(this.todaysDate.getMonth(), this.todaysDate.getFullYear(), new Array<Entry>());
    const start = this.calendarDays[0].date;
    const end = this.calendarDays[this.calendarDays.length - 1].date;
    this._timetrackerService.getEntriesByDateRange(start, end).then( entries => {
      if (entries) {
        this.calendarDays = this.calendar.getCalendarDays(this.todaysDate.getMonth(), this.todaysDate.getFullYear(), entries);
      }
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });

  }

  ngOnInit() {
  }
  nextMonth(): void {
    const nextMonth = this.activeMonth.getMonth() === 11 ? 0 : this.activeMonth.getMonth() + 1;
    const nextYear = this.activeMonth.getMonth() === 11 ? this.activeMonth.getFullYear() + 1 : this.activeMonth.getFullYear();
    this.activeMonth = new Date(nextYear, nextMonth, 1);
    this.calendarDays = this.calendar.getCalendarDays(this.activeMonth.getMonth(), this.activeMonth.getFullYear(), new Array<Entry>());
    this.activeMonthName = this.calendar.getMonthName(this.activeMonth.getMonth());
    const start = this.calendarDays[0].date;
    const end = this.calendarDays[this.calendarDays.length - 1].date;
    this._timetrackerService.getEntriesByDateRange(start, end).then( entries => {
      this.calendarDays = this.calendar.getCalendarDays(nextMonth, nextYear, entries);
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }
  previousMonth(): void {
    const previousMonth = this.activeMonth.getMonth() === 0 ? 11 : this.activeMonth.getMonth() - 1;
    const previousYear = this.activeMonth.getMonth() === 0 ? this.activeMonth.getFullYear() - 1 : this.activeMonth.getFullYear();
    this.activeMonth = new Date(previousYear, previousMonth, 1);
    this.calendarDays = this.calendar.getCalendarDays(this.activeMonth.getMonth(), this.activeMonth.getFullYear(), new Array<Entry>());
    this.activeMonthName = this.calendar.getMonthName(this.activeMonth.getMonth());
    const start = this.calendarDays[0].date;
    const end = this.calendarDays[this.calendarDays.length - 1].date;
    this._timetrackerService.getEntriesByDateRange(start, end).then( entries => {
      this.calendarDays = this.calendar.getCalendarDays(previousMonth, previousYear, entries);
    }, error => {
      const edr = this._dialog.open(ErrorDialogComponent);
      edr.componentInstance.error = error;
    });
  }
}
