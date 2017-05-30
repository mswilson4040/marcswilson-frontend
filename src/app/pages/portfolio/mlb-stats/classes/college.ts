export class College {

  // <editor-fold desc="Colleges class properties">
  public playerID: string = null;
  public schoolID: string = null;
  public yearID: number = null;
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
