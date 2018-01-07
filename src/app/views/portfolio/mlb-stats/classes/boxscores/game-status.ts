export class GameStatus {
  public is_no_hitter: string = null;
  public top_inning: string = null;
  public s: string = null;
  public b: string = null;
  public reason: string = null;
  public ind: string = null;
  public status: string = null;
  public is_perfect_game = null;
  public o: string = null;
  public inning: string = null;
  public inning_state: string = null;
  public note: string = null;
  constructor(data?: any) {
    if (data) {
      this.is_no_hitter = data.is_no_hitter;
      this.top_inning = data.top_inning;
      this.s = data.s;
      this.b = data.b;
      this.reason = data.reason;
      this.ind = data.ind;
      this.status = data.status;
      this.is_perfect_game = data.is_perfect_game;
      this.o = data.o;
      this.inning = this.formatInning(data.inning);
      this.inning_state = data.inning_state;
      this.note = data.note;
    }
  }
  formatInning(inning: string) {
    const num = +inning;
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) {
      return inning + 'st';
    }
    if (j === 2 && k !== 12) {
      return inning + 'nd';
    }
    if (j === 3 && k !== 13) {
      return inning + 'rd';
    }
    return inning + 'th';
  }
}
