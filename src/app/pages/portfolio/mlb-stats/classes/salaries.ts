export class Salaries {

  // <editor-fold desc="Salaries class properties">
  public yearID: number = null;
  public teamID: string = null;
  public lgID: string = null;
  public playerID: string = null;
  public salary: number = null;
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
