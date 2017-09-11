import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker-calendar',
  templateUrl: './time-tracker-calendar.component.html',
  styleUrls: ['./time-tracker-calendar.component.scss']
})
export class TimeTrackerCalendarComponent implements OnInit {
  public todaysDate: Date = new Date();
  public calendarDays: Array<Date> = new Array<Date>();
  public activeMonth: Date = new Date();
  public activeMonthName: string = this.getMonthName(this.activeMonth.getMonth());
  constructor() {
    this.calendarDays = this.getCalendarDays(this.todaysDate.getMonth(), this.todaysDate.getFullYear());
  }

  ngOnInit() {
  }
  getCalendarDays(month: number, year: number): Array<Date> {
    const date = new Date(year, month, 1);
    let days = new Array<Date>();
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    const firstDay = new Date(days[0]);
    const lastDay = new Date(days[days.length]);
    if (firstDay.getDay() !== 0) {
      const prefixDays = new Array<Date>();
      const lastMonthIndex = month === 0 ? 11 : month;
      const lastYearIndex = month === 0 ? year - 1 : year;
      const lastMonth = new Date(lastYearIndex, lastMonthIndex, 0);
      while (lastMonth.getDay() !== 6) {
        prefixDays.push(new Date(lastMonth));
        lastMonth.setDate(lastMonth.getDate() - 1);
      }
      days = prefixDays.reverse().concat(days);
    }
    if (lastDay.getDay() !== 6) {
      const nextMonthIndex = month === 11 ? 0 : month + 1;
      const nextYearIndex = month === 11 ? year + 1 : year;
      const nextMonth = new Date(nextYearIndex, nextMonthIndex, 1);
      while (nextMonth.getDay() !== 0) {
        days.push(new Date(nextMonth));
        nextMonth.setDate(nextMonth.getDate() + 1);
      }
    }
    return days;
  }
  getMonthName(month: number): string {
    const months = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];
    return months[month];
  }
  nextMonth(): void {
    const nextMonth = this.activeMonth.getMonth() === 11 ? 0 : this.activeMonth.getMonth() + 1;
    const nextYear = this.activeMonth.getMonth() === 11 ? this.activeMonth.getFullYear() + 1 : this.activeMonth.getFullYear();
    this.activeMonth = new Date(nextYear, nextMonth, 1);
    this.calendarDays = this.getCalendarDays(this.activeMonth.getMonth(), this.activeMonth.getFullYear());
    this.activeMonthName = this.getMonthName(this.activeMonth.getMonth());
  }
  previousMonth(): void {
    const previousMonth = this.activeMonth.getMonth() === 0 ? 11 : this.activeMonth.getMonth() - 1;
    const previousYear = this.activeMonth.getMonth() === 0 ? this.activeMonth.getFullYear() - 1 : this.activeMonth.getFullYear();
    this.activeMonth = new Date(previousYear, previousMonth, 1);
    this.calendarDays = this.getCalendarDays(this.activeMonth.getMonth(), this.activeMonth.getFullYear());
    this.activeMonthName = this.getMonthName(this.activeMonth.getMonth());
  }
}
