export class IndividualAward {

  // <editor-fold desc="IndividualAwards class properties">
  public playerID: string = null;
  public awardID: string = null;
  public yearID: number = null;
  public lgID: string = null;
  public tie: string = null;
  public notes: string = null;
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
