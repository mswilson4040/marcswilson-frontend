import {Entry} from './company';
import * as Holidays from 'date-holidays';

export class Calendar {

  getCalendarDays(month: number, year: number, entries: Array<Entry>): Array<CalendarDay> {
    const date = new Date(year, month, 1);
    let days = new Array<CalendarDay>();
    while (date.getMonth() === month) {
      date.setHours(0, 0, 0, 0);
      days.push(new CalendarDay(new Date(date), entries.filter( e => {
        e.date.setHours(0, 0, 0, 0);
        return e.date.getTime() === new Date(date).getTime();
      })));
      date.setDate(date.getDate() + 1);
    }
    const firstDay = new Date(days[0].date);
    const lastDay = new Date(days[days.length - 1].date);
    if (firstDay.getDay() !== 0) {
      const prefixDays = new Array<CalendarDay>();
      const lastMonthIndex = month === 0 ? 12 : month;
      const lastYearIndex = month === 0 ? year - 1 : year;
      const lastMonth = new Date(lastYearIndex, lastMonthIndex, 0);
      while (lastMonth.getDay() !== 6) {
        lastMonth.setHours(0, 0, 0, 0);
        prefixDays.push(new CalendarDay(new Date(lastMonth), entries.filter( e => {
          e.date.setHours(0, 0, 0, 0);
          return e.date.getTime() === new Date(lastMonth).getTime();
        })));
        lastMonth.setDate(lastMonth.getDate() - 1);
      }
      days = prefixDays.reverse().concat(days);
    }
    if (lastDay.getDay() !== 6) {
      const nextMonthIndex = month === 11 ? 0 : month + 1;
      const nextYearIndex = month === 11 ? year + 1 : year;
      const nextMonth = new Date(nextYearIndex, nextMonthIndex, 1);
      while (nextMonth.getDay() !== 0) {
        nextMonth.setHours(0, 0, 0, 0);
        days.push(new CalendarDay(new Date(nextMonth), entries.filter( e => {
          e.date.setHours(0, 0, 0, 0);
          return e.date.getTime() === new Date(nextMonth).getTime();
        })));
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
}

export class CalendarDay {
  public date: Date = null;
  public entries: Array<Entry> = new Array<Entry>();
  public holiday: any = {};
  constructor(date?: Date, entries?: Array<Entry>) {
    if (date && entries) {
      this.date = date;
      this.entries = entries;
      this.holiday = this.getHoliday(this.date);
    }
  }
  getHoliday(date: Date) {
    const holiday = new Holidays();
    holiday.init('US');
    const ret = holiday.isHoliday(date)
    if (ret) {
      return ret;
    } else {
      return null;
    }
  }
}
