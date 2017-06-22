export class Powerball {
  public date: Date = null;
  public first: number = null;
  public second: number = null;
  public third: number = null;
  public fourth: number = null;
  public fifth: number = null;
  public powerball: number = null;

  constructor(private _rawObject = null) {
    if (this._rawObject !== null) {
      this.date = this.parseDate(this._rawObject.draw_date);
      this.parseNumbers(this._rawObject.winning_numbers);
    }
  }

  parseDate(date: string): Date {
    if (date) {
      return new Date(date);
    } else {
      return null;
    }
  }
  parseNumbers(numbers: string): void {
    const nums = numbers.split(' ');
    if (nums.length === 6) {
      this.first = +nums[0];
      this.second = +nums[1];
      this.third = +nums[2];
      this.fourth = +nums[3];
      this.fifth = +nums[4];
      this.powerball = +nums[5];
    }
  }
}
