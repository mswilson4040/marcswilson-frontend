export class Runner {
  public id: string = null;
  public last: string = null;
  public number: string = null;
  public name_display_roster: string = null;
  public first: string = null;
  public onBase: boolean = null;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.last = data.last;
      this.number = data.number;
      this.name_display_roster = data.name_display_roster;
      this.first = data.first;
      this.onBase = true;
    } else {
      this.onBase = false;
    }
  }
}
