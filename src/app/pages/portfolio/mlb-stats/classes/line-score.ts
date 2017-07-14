export class LineScore {
  public r = { home: 0, away: 0, diff: 0 };
  constructor(data?) {
    if (data) {
      this.r.home = data.r.home;
      this.r.away = data.r.away;
      this.r.diff = data.r.diff;
    }
  }
}
