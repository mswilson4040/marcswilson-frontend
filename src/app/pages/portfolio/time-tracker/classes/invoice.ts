import { Company, Entry } from './company';

export class Invoice {
  public company: Company = null;
  public billRate: number = null;
  public entries: Array<Entry> = new Array<Entry>();
  public totalHours = 0;
  public totalCompensation = 0;

  constructor(data?) {
    if (data) {
      this.company = data.company;
      this.billRate = data.billRate;
      for (let i = 0; i < data.entries.length; i++) {
        const entry = data.entries[i];
        this.addEntry(entry);
      }
    }
  }
  addEntry(entry: Entry): Array<Entry> {
    this.entries.push(entry);
    this.totalHours = this.getTotalHours();
    this.totalCompensation = this.totalHours * this.billRate;
    return this.entries;
  }
  removeEntry(entry: Entry): Array<Entry> {
    this.entries = this.entries.filter( e => { return entry._id !== e._id; });
    return this.entries;
  }
  getTotalHours(): number {
    let hours = 0;
    for (let i = 0; i < this.entries.length; i++) {
      hours += this.entries[i].timeSpent;
    }
    return hours;
  }
}
