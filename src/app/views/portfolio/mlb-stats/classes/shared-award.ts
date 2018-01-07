export class SharedAward {

  // <editor-fold desc="SharedAwards class properties">
  public awardID: string = null;
  public yearID: number = null;
  public lgID: string = null;
  public playerID: string = null;
  public pointsWon: number = null;
  public pointsMax: number = null;
  public votesFirst: number = null;
  // </editor-fold>

  constructor(data?) {
    if (data) {
      for (const obj in data) {
        if (data.hasOwnProperty(obj)) {
          this[obj] = data[obj];
        }
      }
    }
  }
}
