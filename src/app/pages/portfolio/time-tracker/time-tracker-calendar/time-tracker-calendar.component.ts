import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker-calendar',
  templateUrl: './time-tracker-calendar.component.html',
  styleUrls: ['./time-tracker-calendar.component.scss']
})
export class TimeTrackerCalendarComponent implements OnInit {
  public todaysDate: Date = new Date();
  public calendarDays: Array<Date> = new Array<Date>();
  constructor() {
    this.calendarDays = this.getCalendarDays(this.todaysDate.getMonth(), this.todaysDate.getFullYear());
  }

  ngOnInit() {
  }
  getCalendarDays(month: number, year: number): Array<Date> {
    const date = new Date(year, month, 1);
    const days = new Array<Date>();
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

}
