export class AllStar {

  // <editor-fold desc="AllStar class properties">
  public playerID: string = null;
  public yearID: number = null;
  public gameNum: number = null;
  public gameID: string = null;
  public teamID: string = null;
  public GP: number = null;
  public startingPos: string = null;
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
